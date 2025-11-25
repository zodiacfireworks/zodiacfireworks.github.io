#!/bin/bash

# Astro Portfolio Quick Start Script

echo "🚀 Martin Vuelta Portfolio - Quick Start"
echo "========================================"
echo ""

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install

    if [ $? -eq 0 ]; then
        echo "✅ Dependencies installed successfully!"
    else
        echo "❌ Failed to install dependencies."
        exit 1
    fi
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎨 Starting development server..."
echo ""
echo "Your portfolio will be available at:"
echo "👉 http://localhost:4321"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
