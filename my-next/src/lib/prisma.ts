import { PrismaClient} from "@prisma/client/extension";

const prisma: PrismaClient = global.prisma ?? new PrismaClient({log: ['query']})
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export default prisma
