import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

app.use('*', cors({
  origin: (origin) => {
    if (!origin) {
      return origin
    }

    const isLocalhost = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
    const isVercel = origin.endsWith('.vercel.app')
    const knownOrigins = [
      'https://story-tide-frontend.vercel.app',
    ]

    if (isLocalhost || isVercel || knownOrigins.includes(origin)) {
      return origin
    }

    return null
  },
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'X-Requested-With'],
  maxAge: 86400,
  credentials: true
}))

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

app.get('/', (c) => {
  return c.text('StoryTide API is running!')
})

export default app;