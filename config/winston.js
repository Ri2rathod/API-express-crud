import winston from "winston";

// creates a new Winston Logger
let logger = new winston.createLogger({
  level: 'info' ,
  transports: [
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
  exitOnError: false
});
logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}

export default  logger;