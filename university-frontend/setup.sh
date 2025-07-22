#!/bin/bash

# University Frontend Setup Script
# This script sets up the environment for the university frontend application

echo "🚀 Setting up University Frontend..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v20 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file
echo "🔧 Creating environment file..."
cat > .env.local << EOF
# API Configuration for local development
REACT_APP_API_BASE_URL=http://localhost:3002/api
EOF

echo "✅ Environment file created: .env.local"

# Check if backend is running
echo "🔍 Checking if backend is running..."
if curl -s http://localhost:3002/api/health > /dev/null; then
    echo "✅ Backend is running on port 3002"
else
    echo "⚠️  Backend is not running on port 3002"
    echo "   Please start the backend first:"
    echo "   1. Clone the backend repository:"
    echo "      git clone https://github.com/haileyburgess/Fullstack-University-backend.git"
    echo "   2. Follow the backend setup instructions in the README"
fi

echo ""
echo "🎉 Setup complete!"
echo "📝 Next steps:"
echo "   1. Make sure the backend is running on port 3002"
echo "   2. Run: npm start"
echo "   3. Open http://localhost:3000 in your browser"
echo ""
echo "📚 For detailed instructions, see README.md" 