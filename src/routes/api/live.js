import 'dotenv/config';

export async function GET() {
    var liveApiUrl = process.env.LIVE_API_URL;
    let players, lobbies;

    // Fetches online players and lobbies from TTL backend
    try {
        const controller = new AbortController()

        // 200ms timeout when the backend api is offline (requests in localhost)
        const timeoutId = setTimeout(() => controller.abort(), 100);
        players = await fetch(`${liveApiUrl}/players`, { signal: controller.signal });
        players = await players.json();
        lobbies = await fetch(`${liveApiUrl}/lobbies`, { signal: controller.signal });
        lobbies = await lobbies.json();

        return {
            status: 200,
            body: {
                players,
                lobbies
            }
        };
    }
    catch(err) {      
        console.error(err);
        players = lobbies = null;

        return {
            status: 500,
            body: {
                players,
                lobbies
            }
        }
    }
 }
 