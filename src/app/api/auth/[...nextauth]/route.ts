import { authOptions } from '@/libs/auth'
import NextAuth from 'next-auth'

const handler = NextAuth(authOptions)

export {handler as Get, handler as POST}