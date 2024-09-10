const createUserSchema = {
	tags: ["User"],
	body: {
		type: "object",
		properties: {
			name: { type: "string" },
			email: { type: "string", format: "email" },
		},
	},
};

export { createUserSchema };
