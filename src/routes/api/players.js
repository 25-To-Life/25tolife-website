import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    var playersPC = await prisma.users.findMany({
        orderBy: { 
            stats_pc: {ranking: 'desc'} 
        },
        include: {
            stats_pc: {
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
            stats_ps2: {
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

    var playersPS2 = await prisma.users.findMany({
        orderBy: { 
            stats_ps2: {ranking: 'desc'}
        },
        include: {
            stats_pc: {
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
            stats_ps2: {
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
        body: {
            pc: playersPC,
            ps2: playersPS2,
        }
    }
}
