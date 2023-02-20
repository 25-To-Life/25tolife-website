import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    var members = await prisma.clan_members.findMany({
        include: {
            clan: {
                select: {
                    abbr: true,
                }
            }
        }
    });

    var playersPC = await prisma.users.findMany({
        select: {
            pid: true,
            username: true,
            clan_tag: true,
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
            stats_ps2: false,
            friends: false,
        },
        orderBy: { 
            stats_pc: {ranking: 'desc'} 
        },
    });
    playersPC = playersPC.filter(p =>
        p.stats_pc.law_time + p.stats_pc.crim_time > 0
    );
    
    let membered = [];
    let member = null;
    playersPC.forEach((p) => {
        member = members.find(m => m.pid == p.pid);
        if(member != null)
            membered.push({...p, clan_tag: member.clan.abbr});
        else
            membered.push(p);
    });
    playersPC = membered;

    var playersPS2 = await prisma.users.findMany({
        select: {
            pid: true,
            username: true,
            clan_tag: true,
            stats_pc: false,
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
        },
        orderBy: { 
            stats_ps2: {ranking: 'desc'}
        },
    });
    playersPS2 = playersPS2.filter(p =>
        p.stats_ps2.law_time + p.stats_ps2.crim_time > 0
    );

    membered = [];

    playersPS2.forEach((p) => {
        member = members.find(m => m.pid == p.pid);
        if(member != null)
            membered.push({...p, clan_tag: member.clan.abbr});
        else
            membered.push(p);
    });
    playersPS2 = membered;
    
    return {
        status: 200,
        body: {
            pc: playersPC,
            ps2: playersPS2,
        }
    }
}
