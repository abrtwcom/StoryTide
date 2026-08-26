import { z } from "zod";
declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
declare const createPostInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    content: string;
    title: string;
    published?: boolean | undefined;
}, {
    content: string;
    title: string;
    published?: boolean | undefined;
}>;
declare const updatePostInput: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    published: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content?: string | undefined;
    title?: string | undefined;
    published?: boolean | undefined;
}, {
    id: string;
    content?: string | undefined;
    title?: string | undefined;
    published?: boolean | undefined;
}>;
export type updatePostType = z.infer<typeof updatePostInput>;
export type createPostType = z.infer<typeof createPostInput>;
export type signinInputType = z.infer<typeof signinInput>;
export type signupInputType = z.infer<typeof signupInput>;
export { signupInput, signinInput, createPostInput, updatePostInput };
