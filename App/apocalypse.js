import { app, BrowserWindow, Menu, Tray } from 'electron'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow = null;
let splashWindow = null;
let tray = null;
let isQuitting = false;


const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        if (mainWindow) {
            // Eğer pencere gizlenmişse (Tray'deyse) göster
            if (!mainWindow.isVisible()) {
                mainWindow.show();
            }
            // Eğer simge durumuna küçültülmüşse büyüt
            if (mainWindow.isMinimized()) {
                mainWindow.restore();
            }
            // Pencereyi en öne getir ve odaklan
            mainWindow.focus();
        }
    });

    // Uygulama hazır olduğunda penceremizi oluştur


    app.whenReady().then(() => {
        Menu.setApplicationMenu(null);

        createSplash();
        createWindow();
        createTray();


        setTimeout(() => {
            if (splashWindow && !splashWindow.isDestroyed()) {
                splashWindow.close();
                splashWindow = null;
            }
            if (mainWindow) {
                mainWindow.show();
                mainWindow.center();
            }
        }, 2000);
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        } else {
            mainWindow.show();
        }
    });

}

function createSplash() {
    splashWindow = new BrowserWindow({
        width: 400,
        height: 400,
        frame: false,
        transparent: true,
        resizable: false,
        alwaysOnTop: true,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    splashWindow.loadFile(path.join(__dirname, 'splash.html'));
    splashWindow.center();
}

async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: false,
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    mainWindow.on("close", (event) => {
        if (!isQuitting) {
            event.preventDefault();
            mainWindow.hide();
        }
    });
}

const createTray = () => {
    tray = new Tray(path.join(__dirname, 'icon.png'));

    const contextMenu = Menu.buildFromTemplate([
        {
            label: "Uygulamayı Göster",
            click() {
                mainWindow.show();
            }
        },
        {
            type: "separator"
        },
        {
            label: "Uygulamayı Kapat",
            click() {
                isQuitting = true;
                app.quit();
            }
        }
    ]);

    tray.setToolTip("Apocalypse");
    tray.setContextMenu(contextMenu);

    tray.on("double-click", () => {
        mainWindow.show();
    });
};


