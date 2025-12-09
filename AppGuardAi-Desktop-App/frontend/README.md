# AppGuard AI Desktop App

AppGuard AI is a desktop application built with Electron, React, and Vite. It provides AI-powered security analysis for applications, helping users detect potential threats and vulnerabilities in their software.

## Features

- AI-driven malware detection
- File upload and analysis
- Real-time security scanning
- User-friendly desktop interface
- Cross-platform support (Windows, macOS, Linux)

## Prerequisites

Before installing and running the application, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher) - Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

## Installation

Follow these steps to install the AppGuard AI desktop application:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AppGuardAi-Desktop-App/frontend
```

Replace `<repository-url>` with the actual repository URL.

### 2. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

This command will install all the dependencies listed in `package.json`, including React, Electron, Vite, and other development tools.

### 3. Environment Configuration

The application uses environment variables for configuration. A `.env` file is already provided with default settings. You can modify it if needed:

- `VITE_API_BASE_URL`: Backend API URL (default: http://localhost:3000/api)
- `VITE_APP_NAME`: Application name
- `VITE_APP_VERSION`: Application version
- Other settings for development, security, and file uploads

**Note:** Ensure the backend API is running on the specified URL if you plan to use full functionality.

## Running the Application

AppGuard AI can be run in two ways: as a **website** (web browser) or as a **desktop application** (Electron app). Choose the method that best fits your needs.

### Option 1: Running as Website (Web Browser)

To run AppGuard AI as a web application in your browser:

1. **Start the Development Server:**
   ```bash
   npm run dev
   ```

2. **Open in Browser:**
   - The server will start on `http://localhost:5173`
   - Open your web browser (Chrome, Firefox, Edge, etc.)
   - Navigate to `http://localhost:5173`
   - You'll see the AppGuard AI web interface

**Benefits of Web Mode:**
- Faster startup
- Access from any device on your network
- Easier debugging with browser dev tools
- No installation required

**Note:** Some desktop-specific features may not be available in web mode.

### Option 2: Running as Desktop Application (Electron)

To run AppGuard AI as a native desktop application:

#### Development Mode (Recommended for Development)

```bash
npm run start
```

This command will:
1. Start the Vite development server in the background
2. Wait for the server to be ready
3. Launch the Electron desktop application
4. Open developer tools automatically for debugging

The desktop application window will open, showing the AppGuard AI interface with native desktop features.

#### Alternative Development Commands

- **Start only the Vite dev server:** `npm run dev`
- **Start only Electron** (after dev server is running): `npm run electron`

#### Production Mode

For testing the production build:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Run production version:**
   ```bash
   npm run electron:prod
   ```

**Benefits of Desktop Mode:**
- Native desktop experience
- Access to system resources
- Offline functionality
- Professional application appearance
- All features fully functional

### Creating Distributable Desktop Packages

To create installable desktop packages for distribution:

```bash
npm run dist
```

This creates platform-specific installers in the `dist-electron` directory:
- **Windows:** `.exe` installer
- **macOS:** `.dmg` or `.pkg` file
- **Linux:** `.AppImage` or `.deb` package

Install the generated package like any other software on your system.

## Project Structure

```
frontend/
├── electron/           # Electron main process files
│   ├── electron.js     # Main Electron entry point
│   ├── preload.js      # Preload script for security
│   └── electron-builder.json  # Build configuration
├── public/             # Static assets
├── src/                # React application source
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages/routes
│   └── assets/         # Application assets
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## Development

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run electron` - Start Electron in development
- `npm run electron:prod` - Start Electron in production
- `npm run start` - Start both dev server and Electron
- `npm run dist` - Build distributable packages

### Code Quality

The project uses ESLint for code linting. Run `npm run lint` to check for code issues.

### Technologies Used

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Desktop Framework:** Electron
- **Routing:** React Router DOM
- **Linting:** ESLint

## Troubleshooting

### Common Issues

1. **Port 5173 already in use:**
   - Kill the process using the port or change the port in `vite.config.js`

2. **Electron fails to start:**
   - Ensure Node.js version is compatible
   - Try reinstalling dependencies: `rm -rf node_modules && npm install`

3. **Build fails:**
   - Clear cache: `npm run build -- --emptyOutDir`
   - Check for syntax errors in the code

4. **API connection issues:**
   - Verify the backend is running on the correct port
   - Check `VITE_API_BASE_URL` in `.env`

### Getting Help

If you encounter issues:
1. Check the console logs in Electron's developer tools
2. Verify all prerequisites are installed
3. Ensure you're in the correct directory (`frontend/`)
4. Check for any error messages in the terminal

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please contact the development team or create an issue in the repository.
