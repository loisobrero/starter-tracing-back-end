const pinoHttp = require("pino-http");
const { nanoid } = require("nanoid");

const level = process.env.LOG_LEVEL || "info"

const nodeEnv = process.env.NODE_ENV || 'development'
const prettyPrint = nodeEnv === "development"

const logger = pinoHttp({
  genReqId: (request) => request.headers['edroSf2GZu8ieWcMu5rKQ'] || nanoid(),
  level,
  prettyPrint
});

module.exports = logger;