@echo off
REM University Frontend Setup Script for Windows
REM This script sets up the environment for the university frontend application

echo 🚀 Setting up University Frontend...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v20 or higher.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Create environment file
echo 🔧 Creating environment file...
(
echo # API Configuration for local development
echo REACT_APP_API_BASE_URL=http://localhost:3002/api
) > .env.local

echo ✅ Environment file created: .env.local

REM Check if backend is running (Windows version)
echo 🔍 Checking if backend is running...
curl -s http://localhost:3002/api/health >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Backend is running on port 3002
) else (
    echo ⚠️  Backend is not running on port 3002
    echo    Please start the backend first:
    echo    1. Clone the backend repository:
    echo       git clone https://github.com/haileyburgess/Fullstack-University-backend.git
    echo    2. Follow the backend setup instructions in the README
)

echo.
echo 🎉 Setup complete!
echo 📝 Next steps:
echo    1. Make sure the backend is running on port 3002
echo    2. Run: npm start
echo    3. Open http://localhost:3000 in your browser
echo.
echo 📚 For detailed instructions, see README.md
pause 