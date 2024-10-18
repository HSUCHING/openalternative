import { Pool, neonConfig } from "@neondatabase/serverless"
import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import ws from "ws"
import { env } from "~/env"

// Setup
dotenv.config()
neonConfig.webSocketConstructor = ws
const connectionString = `${env.DATABASE_URL}`

// Init prisma client
const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
export const prisma = new PrismaClient({ adapter })
