module.exports = {
  apps: [
    {
      name: 'vkm-nextjs',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/vkm-nextjs',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      restart_delay: 1000,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: '/var/log/pm2/vkm-nextjs-error.log',
      out_file: '/var/log/pm2/vkm-nextjs-out.log',
      log_file: '/var/log/pm2/vkm-nextjs-combined.log',
      time: true,
      // Ensure process persists across disconnections
      detached: true,
      // Auto-save PM2 process list
      save: true
    }
  ]
};