# Apocalypse

![Apocalypse Logo](./App/icon.png)

> Apocalypse is a web application wrapper.

## About the Project
Apocalypse is a fast and lightweight Electron-based desktop client that seamlessly integrates your web-based music platform directly into the operating system. By utilizing the Chromium engine in the background, it wraps the target web address into an independent window, providing a smooth, dedicated desktop experience completely separate from a standard web browser.

## Key Features
*   **Isolated Desktop Experience:** A dedicated, standalone interface free from browser tabs and distractions.
*   **System Tray Integration:** When closed, the application minimizes to the system tray (bottom right corner) and continues playing music in the background.
*   **Easy Installation:** Features a standard Windows Setup (`.exe`) wizard with custom directory selection, powered by a tailored NSIS configuration.

## Development & Installation

Follow the steps below to run or build the project on your local machine.

### Prerequisites
*   [Node.js](https://nodejs.org/) (Must be installed on your system)

### Setup Instructions

1. **Install Dependencies:**
   Run the following command in your terminal to download the required packages and the Electron core:
   ```bash
   npm install
