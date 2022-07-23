import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    var result = await prisma.stats.findFirst({where: {pid: 4660}});
    console.log(JSON.stringify(result));
    return {
        status: 200,
        body: {
            test: result
        }
    }
}