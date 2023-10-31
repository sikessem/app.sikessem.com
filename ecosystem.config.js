module.exports = {
  apps : [{
    name: 'sikessem.com',
    interpreter: 'bun',
    interpreter_args: 'run',
    script: 'site/server/entry.bun.js',
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
      'post-deploy' : 'bun install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
