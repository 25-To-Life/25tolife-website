import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    var result = await prisma.users.findMany({
        orderBy: {
            stats: {ranking: 'desc'}
        },
        include: {
            stats: true,
            friends: false
        }
    });
    console.log(JSON.stringify(result));
    return {
        status: 200,
        body: {
            players: result
        }
    }
}