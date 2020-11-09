const APP_ENV = process.env.App_ENV || 'local'

const envPath = `env/.env.${APP_ENV}`
const fs = require('fs')
fs.statSync(envPath)
const DotEnv = require('dotenv-webpack')
const envFile = new DotEnv({ path: envPath, systemvars: true })

const nextConfig = {
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins.push(envFile)

    return config
  }
}

module.exports = nextConfig
