export const winstonConf = {
  file: {
    level: process.env.LOGGER_LEVEL == 'dev' ? 'debug' : process.env.LOGGER_LEVEL ?? 'info',
    filename: 'logs/app.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
}