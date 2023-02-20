import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET({ params }) {
    // get player data
    const name = params.name;
    var player = await prisma.users.findFirst({
        select: {
            pid: true,
            username: true,
            clan_tag: true,
            stats_pc: true,
            stats_ps2: true,
            friends: false,
        },
        where: {
            username: name
        },
    });
    // player not found - the error is handled by the page
    if(player == null) {
        return {
            status: 200,
            body: {
                player: null,
                rankPC: null,
                rankPS2: null
            }
        }
    }

    // calculate player's PC rank
    var higherRatedPC = await prisma.stats_pc.findMany({
        select: {
            ranking: true,
        },
        where: {
            ranking: {
                gt: player.stats_pc.ranking,
            },
        }
    });

    // calculate player's PS2 rank
    var higherRatedPS2 = await prisma.stats_ps2.findMany({
        select: {
            ranking: true,
        },
        where: {
            ranking: {
                gt: player.stats_ps2.ranking,
            },
        }
    });

    return {
        status: 200,
        body: {
            player,
            rankPC: higherRatedPC.length + 1,
            rankPS2: higherRatedPS2.length + 1,
        },
    }
}