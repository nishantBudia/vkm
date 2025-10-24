#!/bin/bash

# EC2 Server Setup Script for VKM Traders Website
# Run this script on a fresh Amazon Linux 2023 EC2 t4g.nano instance as ec2-user

set -e

echo "🚀 Setting up VKM Traders website on EC2..."

# Update system
echo "📦 Updating system packages..."
sudo dnf update -y

# Install Node.js 20.x (LTS)
echo "📦 Installing Node.js..."
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

# Install Nginx
echo "📦 Installing Nginx..."
sudo dnf install nginx -y

# Install Git (if not already installed)
echo "📦 Installing Git..."
sudo dnf install git -y

# Install PM2 globally
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Create application directory
echo "📁 Creating application directory..."
sudo mkdir -p /var/www/vkm-nextjs
sudo chown -R ec2-user:ec2-user /var/www/vkm-nextjs

# Create PM2 log directory
echo "📁 Creating PM2 log directory..."
sudo mkdir -p /var/log/pm2
sudo chown -R ec2-user:ec2-user /var/log/pm2

# Configure Nginx (will be done after git clone)
echo "🔧 Nginx will be configured after git clone..."

# Configure PM2 to start on boot and persist across SSH disconnections
echo "🔧 Configuring PM2 startup..."
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ec2-user --hp /home/ec2-user

# Configure firewall (Amazon Linux uses different firewall)
echo "🔒 Configuring firewall..."
sudo dnf install firewalld -y
sudo systemctl start firewalld
sudo systemctl enable firewalld
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload

# Enable Nginx service
echo "🔧 Enabling Nginx..."
sudo systemctl enable nginx

echo "✅ Server setup complete!"
echo ""
echo "Next steps:"
echo "1. Clone your Git repository: git clone <your-repo-url> /var/www/vkm-nextjs"
echo "2. Run the deploy script: cd /var/www/vkm-nextjs && ./deploy/deploy.sh"
echo ""
echo "The PM2 process will keep running even after you disconnect from SSH!"