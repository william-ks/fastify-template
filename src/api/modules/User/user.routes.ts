import { FastifyInstance as FI, FastifyPluginOptions as FO } from "fastify";
import { createUserController, createUserSchema } from "./useCases/createUser";

const userRouter = async (fastify: FI, options: FO) => {
	fastify.post("/create", {
		schema: createUserSchema,
		handler: createUserController,
	});
};

export { userRouter };
