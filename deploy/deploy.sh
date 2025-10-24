#!/bin/bash

# Deployment script for VKM Traders website
# Run this script after cloning the repository to deploy/update the application

set -e

APP_DIR="/var/www/vkm-nextjs"
BACKUP_DIR="/var/backups/vkm-nextjs"

echo "🚀 Deploying VKM Traders website..."

# Create backup of current deployment (if exists)
if [ -d "$APP_DIR/.next" ]; then
    echo "📦 Creating backup..."
    sudo mkdir -p $BACKUP_DIR
    sudo cp -r $APP_DIR/.next $BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S)
fi

# Stop the application (if running)
echo "⏹️ Stopping application..."
pm2 stop vkm-nextjs || echo "Application not running"

# Navigate to app directory
cd $APP_DIR

# Make sure we're in the right directory
pwd

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Build the application
echo "🔨 Building application..."
npm run build

# Configure Nginx (now that we have the files)
echo "🔧 Configuring Nginx..."
sudo cp $APP_DIR/deploy/nginx.conf /etc/nginx/sites-available/vkm-nextjs
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf /etc/nginx/sites-available/vkm-nextjs /etc/nginx/sites-enabled/

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

# Start Nginx
echo "▶️ Starting Nginx..."
sudo systemctl start nginx
sudo systemctl reload nginx

# Start the application with PM2
echo "▶️ Starting application with PM2..."
pm2 start deploy/ecosystem.config.js

# Save PM2 configuration for auto-restart on reboot
echo "💾 Saving PM2 configuration..."
pm2 save

# Check application status
echo "🔍 Checking application status..."
pm2 status

# Show process list to confirm persistence
echo "🔍 PM2 process list:"
pm2 list

echo ""
echo "✅ Deployment complete!"
echo "🌐 Website should be available at: http://nishant.life"
echo ""
echo "🔄 Your application will keep running even after SSH disconnection!"
echo ""
echo "Useful commands:"
echo "  pm2 status             - Check app status"
echo "  pm2 logs vkm-nextjs    - View app logs"
echo "  pm2 restart vkm-nextjs - Restart app"
echo "  pm2 monit              - Real-time monitoring"
echo "  sudo nginx -t          - Test nginx config"
echo "  sudo systemctl status nginx - Check nginx status"