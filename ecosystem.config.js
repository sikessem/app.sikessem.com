module.exports = {
  apps : [{
    name: 'sikessem.com',
    script: 'apps/website/server/entry.ssr.js',
    args: '',
    watch: true,
    autorestart: true,
    restart_delay: 1000,
    env_production: {
      NODE_ENV: 'production',
    },
    env_development: {
      NODE_ENV: 'development',
    },
  }],
  deploy : {
    production : {
      user : 'sikessem',
      host : '102.219.179.57',
      ref  : 'origin/main',
      repo : 'https://github.com/sikessem/sikessem.com.git',
      path : '/apps/sikessem.com',
      'pre-deploy-local': '',
      'post-deploy' : 'bun install && bun run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
