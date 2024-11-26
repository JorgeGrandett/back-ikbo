import { createLogger, format, transports } from 'winston';
import { winstonConf } from '../../shared/conf/winston.conf';

const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.File(winstonConf.file),
    new transports.Console({
      ...winstonConf.console,
      format: combine(
        colorize(),
        timestamp(),
        myFormat
      )
    })
  ],
  exitOnError: false,
});

export default logger;