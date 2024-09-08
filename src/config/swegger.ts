const swaggerOptions = {
	swagger: {
		info: {
			title: "Sl Suport",
			description:
				"Aqui está toda a documentação de rotas da API do SL-x.",
			version: "1.0.0",
		},
		host: "localhost",
		schemes: ["http"],
		consumes: ["application/json"],
		produces: ["application/json"],
	},
};

const swaggerUiOptions = {
	routePrefix: "/docs",
	exposeRoute: true,
};

export { swaggerOptions, swaggerUiOptions };
