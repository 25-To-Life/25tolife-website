import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    var result = await prisma.users.findMany({
        include: {
            stats: false,
            friends: false
        }
    });
    console.log(JSON.stringify(result));
    return {
        status: 200,
        body: {
            test: result
        }
    }
}