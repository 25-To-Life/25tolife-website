import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET({ params }) {
    // get player data
    const name = params.name;
    var player = await prisma.users.findFirst({
        where: {
            username: name
        },
        include: {
            stats: true,
            friends: false
        }
    });
    // player not found - the error is handled by the page
    if(player == null) {
        return {
            status: 200,
            body: {
                player: null,
                rank: null,
            }
        }
    }

    // calculate player's rank
    var higherRated = await prisma.stats.findMany({
        select: {
            ranking: true,
        },
        where: {
            ranking: {
                gt: player.stats.ranking,
            },
        }
    });

    return {
        status: 200,
        body: {
            player,
            rank: higherRated.length + 1,
        },
    }
}