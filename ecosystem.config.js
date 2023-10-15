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
};
