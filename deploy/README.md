# VKM Traders - EC2 Deployment Guide

This guide covers deploying the VKM Traders Next.js website to an AWS EC2 t4g.nano instance with Nginx and PM2 using Git-based deployment.

## Prerequisites

- AWS EC2 t4g.nano instance running Amazon Linux 2023
- SSH access to the server (as `ec2-user`)
- Domain `nishant.life` pointed to your EC2 instance IP via CloudFlare
- Git repository with your code

## Quick Start

### 1. Launch EC2 Instance

1. **Create EC2 t4g.nano instance** (ARM-based, cost-effective)
   - **AMI**: Amazon Linux 2023
   - **Instance Type**: t4g.nano
   - **Security Group**: Allow HTTP (80), HTTPS (443), and SSH (22)
   - **Key Pair**: Create or use existing SSH key
   - **Storage**: 8GB GP3 is sufficient

### 2. Initial Server Setup

```bash
# SSH into your server as ec2-user
ssh -i your-key.pem ec2-user@your-server-ip

# Clone your repository to a temporary location first
git clone https://github.com/your-username/your-repo.git ~/temp-repo

# Copy and run the setup script
cp ~/temp-repo/deploy/setup-server.sh ~/
chmod +x ~/setup-server.sh
./setup-server.sh

# Clean up temporary files
rm -rf ~/temp-repo ~/setup-server.sh
```

### 3. Deploy Application via Git

```bash
# Clone your repository to the production directory
git clone https://github.com/your-username/your-repo.git /var/www/vkm-nextjs

# Navigate to the application directory
cd /var/www/vkm-nextjs

# Make deployment script executable
chmod +x deploy/deploy.sh

# Run the deployment
./deploy/deploy.sh
```

### 4. Future Updates

For future updates, simply:

```bash
# SSH into server
ssh -i your-key.pem ec2-user@your-server-ip

# Navigate to app directory
cd /var/www/vkm-nextjs

# Pull latest changes
git pull origin main

# Redeploy
./deploy/deploy.sh
```

## File Structure

```
deploy/
├── README.md           # This file
├── setup-server.sh     # Initial server setup script
├── deploy.sh          # Application deployment script
├── nginx.conf         # Nginx configuration
└── ecosystem.config.js # PM2 process configuration
```

## Configuration Details

### Nginx Configuration
- **Reverse proxy** to Next.js app on port 3000
- **Gzip compression** enabled
- **Static file caching** for performance
- **Security headers** included

### PM2 Configuration
- **Process name**: vkm-nextjs
- **Auto-restart** on crashes
- **Memory limit**: 1GB
- **Logging** to `/var/log/pm2/`

## CloudFlare DNS Setup

1. **Add A Record**: `nishant.life` → Your EC2 IP
2. **Add CNAME**: `www.nishant.life` → `nishant.life`
3. **SSL/TLS**: Set to "Flexible" initially (HTTP between CloudFlare and server)

## SSL Certificate (Optional - Recommended for Production)

Install Let's Encrypt SSL certificate:

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d nishant.life -d www.nishant.life

# Test auto-renewal
sudo certbot renew --dry-run
```

## Monitoring & Maintenance

### Application Logs
```bash
# View PM2 logs
pm2 logs vkm-nextjs

# View Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Application Management
```bash
# Check status
pm2 status

# Restart application
pm2 restart vkm-nextjs

# Stop application
pm2 stop vkm-nextjs

# View application details
pm2 show vkm-nextjs
```

### System Monitoring
```bash
# Check disk usage
df -h

# Check memory usage
free -h

# Check system load
htop
```

## Updates & Deployments

To update the website:

1. **Upload new code** to `/var/www/vkm-nextjs`
2. **Run deployment script**: `./deploy/deploy.sh`

The script will:
- Create a backup of current deployment
- Install dependencies
- Build the application
- Restart services

## Cost Optimization

- **t4g.nano**: ~$3.50/month (ARM-based, efficient)
- **8GB GP3 storage**: ~$0.80/month
- **Data transfer**: First 1GB free, then $0.09/GB
- **Total estimated cost**: $5-8/month

## Troubleshooting

### Application Won't Start
```bash
# Check PM2 logs
pm2 logs vkm-nextjs

# Check if Node.js is installed
node --version
npm --version

# Manually start to see errors
cd /var/www/vkm-nextjs
npm start
```

### Nginx Issues
```bash
# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx

# Check Nginx status
sudo systemctl status nginx
```

### Domain Not Resolving
1. Check CloudFlare DNS settings
2. Verify EC2 security groups allow HTTP/HTTPS
3. Check if Nginx is running: `sudo systemctl status nginx`

## Security Best Practices

1. **Keep system updated**: `sudo apt update && sudo apt upgrade`
2. **Configure UFW firewall**: Only allow necessary ports
3. **SSH key authentication**: Disable password authentication
4. **Regular backups**: Script creates automatic backups
5. **SSL certificate**: Use Let's Encrypt for HTTPS

## Support

For issues with this deployment:
1. Check the logs (PM2 and Nginx)
2. Verify all services are running
3. Test the deployment locally first

Your website will be available at: **http://nishant.life**