import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    include: { Community: true },
  });

  const postsData: Record<string, { title: string; description: string }[]> = {
    "Arnold Schwarzenegger": [
      { title: "Sunny Vineyard Morning", description: "Clear skies let the vineyards shine bright this afternoon." },
      { title: "Valley Breeze", description: "A brisk wind swept across the valley early this morning." },
      { title: "Cloud Drift", description: "Soft clouds rolled over the hills, but no rain followed." },
    ],
    "Cypress Hill": [
      { title: "Early Morning Showers", description: "Heavy showers drenched the streets before sunrise." },
      { title: "Coastal Mist", description: "The coast is blanketed in a fine mist drifting off the sea." },
      { title: "Sudden Downpour", description: "A sudden downpour left puddles stretching across the town." },
    ],
    "Joe Rogan": [
      { title: "Nor’wester Gusts", description: "A strong nor’wester rattled rooftops through the city." },
      { title: "Frosty Morning", description: "The air turned crisp with frost glistening on the grass." },
      { title: "Avon Fog", description: "Low fog hugged the Avon River before burning off mid-morning." },
    ],
    "Kim Jong Un": [
      { title: "Harbour Chill", description: "A cold snap swept through, leaving frosty winds along the harbour." },
      { title: "Southern Showers", description: "Intermittent showers moved in from the south." },
      { title: "Pink Sky Evening", description: "The evening sky was painted with streaks of pink over the hills." },
    ],
    "Mathew Dewes": [
      { title: "Coastal Sunshine", description: "Sunshine poured over the coastline with barely a breeze." },
      { title: "Morning Warmth", description: "The morning started cool but quickly warmed by midday." },
      { title: "Light Clouds", description: "Light clouds drifted inland, but skies stayed bright." },
    ],
    "Edmund Hillary": [
      { title: "Visible Breath", description: "The chill this morning made breath visible in the air." },
      { title: "Afternoon Drizzle", description: "Steady drizzle lingered most of the afternoon." },
      { title: "Sudden Hail", description: "A streak of hail hit suddenly, then vanished just as quickly." },
    ],
    "Bob Marley": [
      { title: "Harbour Breeze", description: "A humid breeze carried the scent of salt from the harbour." },
      { title: "Post-Shower Sunshine", description: "Warm sunshine broke through after an early shower." },
      { title: "Evening Stillness", description: "The evening stayed still, with the sea reflecting the sunset." },
    ],
    "Elon Musk": [
      { title: "Thunder Over City", description: "Thunder cracked loudly over the city before easing." },
      { title: "Sticky Air", description: "Warm air turned sticky as dark clouds gathered overhead." },
      { title: "Sunburst Skyline", description: "A brief sunburst lit up the skyline after rain cleared." },
    ],
    "Donald Trump": [
      { title: "Morning Fog", description: "Morning fog made the riverbanks nearly invisible." },
      { title: "Light Drizzle", description: "A light drizzle left the pavements slick." },
      { title: "Heavy Humidity", description: "The air was still, heavy with humidity." },
    ],
    "Jeff Bezos": [
      { title: "Harbour Shimmer", description: "The harbour shimmered under bright, clear skies." },
      { title: "Cooling Shower", description: "A short shower swept in, cooling the afternoon heat." },
      { title: "Ocean Breeze", description: "The breeze off the ocean kept the town comfortable." },
    ],
    "Kanye West": [
      { title: "Golden Hills", description: "Golden light bathed the vineyards and hillsides." },
      { title: "Windy Blossoms", description: "A sudden gust of wind knocked blossoms off the trees." },
      { title: "Calm Sea", description: "The sea glistened calm under a blue sky." },
    ],
    "Will Smith": [
      { title: "Soft Rain", description: "Steady rain softened the sound of traffic all day." },
      { title: "Rainbow Arch", description: "A rainbow arched briefly over the bay." },
      { title: "Cloudy Morning", description: "Low clouds clung to the ranges at sunrise." },
    ],
    "Chris Luxon": [
      { title: "Mountain Winds", description: "Strong winds circled the mountain and rushed down to the coast." },
      { title: "Grey Afternoon", description: "The air felt damp as grey clouds rolled in." },
      { title: "Peak Revealed", description: "Clear skies finally revealed the peak after a day of haze." },
    ],
    "Taika Waititi": [
      { title: "Evening Drizzle", description: "A soft drizzle faded into a calm, cool evening." },
      { title: "Peeking Blue", description: "Patches of blue sky peeked out between showers." },
      { title: "Fresh Rain Scent", description: "The wind carried the scent of fresh rain through the streets." },
    ],
    "Michael Jackson": [
      { title: "Harbour Gales", description: "Gale-force winds whipped across the harbour with no pause." },
      { title: "Afternoon Sun", description: "Bright sunshine made a surprise afternoon appearance." },
      { title: "Racing Clouds", description: "Clouds raced quickly over the hills all morning." },
    ],
    "Morgan Freeman": [
      { title: "Gentle Showers", description: "Gentle showers passed by, leaving the air fresh and cool." },
      { title: "Sunset Rays", description: "A streak of sunlight broke through the clouds at dusk." },
      { title: "Orchard Mist", description: "Mist lingered low over the orchards until midday." },
    ],
    "Jacinda Ardern": [
      { title: "Sunrise Bay", description: "A brilliant sunrise lit up the bay with orange hues." },
      { title: "Afternoon Breeze", description: "The afternoon stayed dry with a soft breeze off the hills." },
      { title: "Clear Evening", description: "Evening skies glowed clear as the temperature dropped." },
    ],
  };

  for (const user of users) {
    const userPosts = postsData[user.name];
    if (!userPosts) continue;

    if (!user.Community) {
      console.warn(`⚠️ User ${user.name} has no community, skipping posts.`);
      continue;
    }

    await prisma.post.createMany({
      data: userPosts.map(({ title, description }) => ({
        title,
        description,
        userId: user.id,
        communityId: user.Community.id,
      })),
    });
  }

  console.log("✅ Seeded 51 posts with unique titles successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
