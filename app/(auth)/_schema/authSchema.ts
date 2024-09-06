import { z } from "zod";

const schema = z.object({
	email: z.string().email({ message: "Invalid email" }),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 characters long" }),
});

export default schema;
