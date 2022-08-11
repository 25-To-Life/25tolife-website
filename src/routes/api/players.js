import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    var players = await prisma.users.findMany({
        orderBy: {
            stats: {ranking: 'desc'}
        },
        include: {
            stats: {
                select: {
                    ranking: true,
                    law_victories: true,
                    crim_victories: true,
                    law_defeats: true,
                    crim_defeats: true,
                    law_time: true,
                    crim_time: true,
                }
            },
            friends: false
        }
    });
    
    return {
        status: 200,
        body: players,
    }
}