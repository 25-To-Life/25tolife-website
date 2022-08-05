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
        url: 'https://discord.gg/eKKhz4sKRS',
        // slide's title
        title: 'What up homie',
        // slide's regular text
        paragraphs: [
            'Currently we\'re preparing our services for public beta testing.',
            'Join our community Discord for latest updates!',
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
        image: 'bankheist_wallpaper.png',
        // image's alt attribute
        alt: '25 To Life Bank Heist wallpaper',
        // image's on:click url
        url: 'https://paypal.me/lifecoder',
        // slide's title
        title: 'Donations',
        // slide's regular text
        paragraphs: [
            'Phoenix Network is a non-profit organization. We live online off personal funds and donations.',
            'If you want to support our work, here\'s the official PayPal.Me link.',
            'Thanks to all of our supporters!',
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