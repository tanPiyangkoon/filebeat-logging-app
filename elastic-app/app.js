const winston = require('winston');

// กำหนด Logger ให้เขียน Log ลง stdout (Filebeat จะอ่านจากตรงนี้)
const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});

function generateLog() {
    const log = {
        timestamp: new Date().toISOString(),
        level: ['INFO', 'WARN', 'ERROR'][Math.floor(Math.random() * 3)],
        message: 'This is a random log message',
        service: 'elastic-app'
    };

    logger.info(log);
}

// สร้าง Log ทุก 5 วินาที
setInterval(generateLog, 5000);
