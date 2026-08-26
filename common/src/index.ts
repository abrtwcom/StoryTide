import { z } from "zod";

const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});

const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

const createPostInput = z.object({
    title: z.string().min(1).max(255),
    content: z.string().min(1),
    published: z.boolean().optional()
});

const updatePostInput = z.object({
    id: z.string(),
    title: z.string().min(1).max(255).optional(),
    content: z.string().min(1).optional(),
    published: z.boolean().optional()
});

export type updatePostType = z.infer<typeof updatePostInput>;
export type createPostType = z.infer<typeof createPostInput>;
export type signinInputType = z.infer<typeof signinInput>;
export type signupInputType = z.infer<typeof signupInput>;

export { signupInput, signinInput, createPostInput, updatePostInput };
