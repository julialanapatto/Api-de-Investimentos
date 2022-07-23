const swaggerConfig = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Investimentos API",
      description: "Api simples, simulando transações bancárias e investimentos, utilizando express documentada pelo swagger",
      version: "1.0"
    },
    servers: [{
      url: "http://localhost:3000",
      description: "servidor local"
    }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ["routes.js"]

}

module.exports = swaggerConfig;