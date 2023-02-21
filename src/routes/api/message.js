import { PrismaClient } from '@prisma/client'
import { hash } from '../../lib/utils';

const prisma = new PrismaClient()

export async function PUT({ request }) {
  let body;
  try {
    body = await request.json();
  }
  catch {
    console.error("[API] Invalid /message payload, cannot parse as JSON");
    return {
      status: 400      
    }
  }
  const msg = body.message;
  let username = request.headers.get('Username');
  let pass = request.headers.get('Password');

  if(msg == null || username == null || pass == null) {
    return {
      status: 400
    }
  }
  
  const user = await prisma.users.findFirst({
    select: {
      pid: true,
      username: true,
      password: true,
      clan_tag: true,
      perms: true
  },
    where: { username },
  });

  if(user !== null && user.perms != null) {
    pass = hash(pass, user.pid);
    if(pass === user.password) {
      // prisma update
      await prisma.message.update({
        where: {
          language: 'english'
        },
        data: { msg }
      });

      return {
        status: 200,
        body: {
          result: 'Message of the day has been updated successfully.'
        }
      }
    }

    return {
      status: 401
    }
  }

  return {
    status: 401
  }
}
 