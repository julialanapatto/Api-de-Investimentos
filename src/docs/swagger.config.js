const swaggerConfig = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Investimentos API",
      description: "Api simples, simulando transações bancárias e investimentos",
      version: "1.0"
    },
    servers: [{
      url: "https://casexpinvestimentos.herokuapp.com",
      description: "heroku application"
    }, {
      url: "http://localhost:3000",
      description: "Servidor local"
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