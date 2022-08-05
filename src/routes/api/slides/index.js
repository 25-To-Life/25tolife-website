import { PrismaClient } from '@prisma/client'

// Carousel slides endpoint

const prisma = new PrismaClient()

// slide list
var slides = [
    {
        // image file name from src/lib/assets/carousel
        image: 'game_wallpaper.png',
        // image's alt attribute
        alt: '25 To Life wallpaper',
        // image's on:click url
        url: '',
        // slide's title
        title: 'This is a nice wallpaper',
        // slide's regular text
        paragraphs: [
            'It appeals to every OGs seeing thanks to its unique style and blablahblah',
            'Now go play and have fun!',
        ],
    },
    {
        // image file name from src/lib/assets/carousel
        image: 'game_ss.png',
        // image's alt attribute
        alt: '25 To Life game screenshot',
        // image's on:click url
        url: 'https://www.youtube.com/watch?v=jisO7Dl3fpE',
        // slide's title
        title: 'Development',
        // slide's regular text
        paragraphs: [
            'You can track our progress in detail on Discord, but here\'s a short developer test video!',
        ],
    },
    {
        // image file name from src/lib/assets/carousel
        image: 'illmatic_liquors.jpg',
        // image's alt attribute
        alt: '25 To Life wallpaper',
        // image's on:click url
        url: '',
        // slide's title
        title: 'Message of the day',
        // slide's regular text
        paragraphs: [],
    },
];

export async function GET() {
    // Query db for message of the day
    const message = await prisma.message.findFirst({});
    // Add to paragraphs
    var msgSlide = slides.find(s => s.title == 'Message of the day');
    const paragraphs = [message.msg];
    msgSlide.paragraphs = paragraphs;
    slides.map(function(s) {
        if(s.title == 'Message of the day')
            s = msgSlide;
    });
    return {
        status: 200,
        body: slides,
    };
}