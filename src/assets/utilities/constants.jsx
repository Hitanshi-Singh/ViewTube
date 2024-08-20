export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${
  import.meta.env.VITE_API_KEY
}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "Twinkle",
    text: "Hey there!",
    reply: [
      {
        name: "Hayat",
        text: "Hey there baby!",
        reply: [
          {
            name: "Twinkle",
            text: "Hi Hayat, wassup?!",
            reply: [],
          },
          {
            name: "Murat",
            text: "Hi Hayat, I am your hubby!",
            reply: [],
          },
          {
            name: "Asli",
            text: "Where is Ipek?",
            reply: [],
          },
        ],
      },
      {
        name: "Kiara",
        text: "Hey !",
        reply: [],
      },
      {
        name: "Alexandra",
        text: "Hey there!",
        reply: [],
      },
    ],
  },
  {
    name: "Star",
    text: "Hey there!",
    reply: [],
  },
  {
    name: "Aarohi",
    text: "Hey there!",
    reply: [
      {
        name: "Twinkle",
        text: "Hey Aarohi!",
        reply: [
          {
            name: "Sam",
            text: "I am a good boy",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Harshit",
    text: "Hey cutie!",
    reply: [
      {
        name: "Twinkle",
        text: "How's the baby bear",
        reply: [],
      },
    ],
  },
  {
    name: "Zara",
    text: "Buy my bags please",
    reply: [],
  },
];

export const OFFSET_LIVE_CHAT=15;