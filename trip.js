/* =====================================================================
   trip.js — ALL OF YOUR CONTENT LIVES HERE
   ---------------------------------------------------------------------
   Edit this file only. You never need to touch app.js or index.html.

   Tips:
   - Keep each piece of text inside "double quotes".
   - To start a new paragraph inside a text field, type \n\n
   - Every stop needs lat + lng (right-click a spot in Google Maps and
     click the numbers at the top to copy them).
   - The stops play in the order you list them.
   - miles: driving miles from the PREVIOUS stop (rough is fine). If you
     leave it out, the straight-line distance is used (good for flights).
   - Photos: put image files in the /images folder and list them like
     { src: "images/whistler.jpg", caption: "First chair" }
   ===================================================================== */

window.TRIP = {
  title: "[Your project title]",
  subtitle: "[A one-line subtitle, e.g. what the year is about]",
  author: "Ian Holzman · NURS 180",

  // Shown on the opening screen (your project description can go here)
  intro: "[Your intro: what this project is and how to explore it.]",

  // Shown when the journey finishes, and under 'About'
  closing: "[Your closing reflection: How does this project capture what wellbeing looks like to you?]",

  // APA 7 references, only if you cite anything. Leave [] if not.
  references: [
    // "Author, A. A. (2024). Title of work. Publisher. https://doi.org/..."
  ],

  stops: [
    // --- Road trip: Vancouver to San Diego (June 2027) ---
    {
      name: "Vancouver, BC",
      lat: 49.2827, lng: -123.1207,
      dates: "Tue, June 1, 2027 · Day 1, start of the road trip",
      activity: "Set off on the trip the day after graduation",
      why: "Has to start somewhere!",
      photos: []
    },
    {
      name: "Seattle, WA",
      lat: 47.6062, lng: -122.3321,
      dates: "Wed, June 2 · 1 night",
      miles: 140,           // from previous stop (approx. driving)
      activity: "Spend a night in Seattle",
      why: "Brief my friends and family on the trip",
      photos: []
    },
    {
      name: "Sequim, WA",
      lat: 48.0795, lng: -123.1018,
      dates: "Thu, June 3 · 1 night",
      miles: 70,           // from previous stop (approx. driving)
      activity: "Drive to and squid in Sequim",
      why: "Have family friends that live in Sequim, and have great memories of squidding with them",
      photos: []
    },
    {
      name: "La Push, WA",
      lat: 47.9076, lng: -124.6363,
      dates: "Fri, June 4 · 1 night",
      miles: 88,           // from previous stop (approx. driving)
      activity: "Explore La Push",
      why: "My favorite beach I have ever been to.",
      photos: []
    },
    {
      name: "Seaside, OR",
      lat: 45.9932, lng: -123.9226,
      dates: "June 5 – 8 · 3 nights",
      miles: 230,           // from previous stop (approx. driving)
      activity: "Head down the coast and stop for three days to surf.",
      why: "A dream of mine is to surf a barrel, find a nice surf town in Oregon.",
      photos: []
    },
    {
      name: "Manzanita, OR",
      lat: 45.7184, lng: -123.9351,
      dates: "June 8 – 10 · 2 nights",
      miles: 25,           // from previous stop (approx. driving)
      activity: "Stop to surf and see the beaches again.",
      why: "When I was a kid I have vivid memories of coming here and watching people surf and feeling a sense of wonder.",
      photos: []
    },
    {
      name: "Mavericks, Half Moon Bay, CA",
      lat: 37.495, lng: -122.499,
      dates: "June 10 – 11 · 1 night",
      miles: 740,           // from previous stop (approx. driving)
      activity: "Watch the waves at Mavericks.",
      why: "Saw the movie Chasing Mavericks and want to see what they look like in real life.",
      photos: []
    },
    {
      name: "Yosemite National Park, CA",
      lat: 37.7456, lng: -119.5936,
      dates: "June 11 – 13 · 2 nights",
      miles: 200,           // from previous stop (approx. driving)
      activity: "Hike Half Dome",
      why: "I came here before and did not get the chance to do Half Dome; I promised myself I would do it one day.",
      photos: []
    },
    {
      name: "Sequoia National Park, CA",
      lat: 36.4864, lng: -118.5658,
      dates: "June 13 – 14 · 1 night",
      miles: 175,           // from previous stop (approx. driving)
      activity: "Spend a night in Sequoia",
      why: "My sister described it as the coolest trees she has ever seen.",
      photos: []
    },
    {
      name: "Joshua Tree National Park, CA",
      lat: 33.8734, lng: -115.901,
      dates: "June 14 – 16 · 2 nights",
      miles: 330,           // from previous stop (approx. driving)
      activity: "Explore Joshua Tree",
      why: "I have listened to Rüfüs Du Sol's set here fifty times, maybe if I come here they will magically appear.",
      photos: []
    },
    {
      name: "San Diego, CA",
      lat: 32.7157, lng: -117.1611,
      dates: "June 16 – 17 · 1 night",
      miles: 175,           // from previous stop (approx. driving)
      activity: "Eat tacos",
      why: "I have heard they have the best Mexican food in the US and have never been.",
      photos: []
    },

    // --- South America: Peru + Chile (June – July 2027) ---
    {
      name: "Cusco, Peru",
      lat: -13.532, lng: -71.9675,
      dates: "June 17 – 20 · 3 nights",
      activity: "Acclimate to elevation",
      why: "Before doing the Inca Trail it is recommended to spend a few days here to acclimate to the elevation.",
      photos: []
    },
    {
      name: "Inca Trail to Machu Picchu, Peru",
      lat: -13.1631, lng: -72.545,
      dates: "June 20 – 25 · 5 days",
      activity: "Hike the Inca Trail over five days, finishing at Machu Picchu.",
      why: "Undoubtedly a bucket list thing, in real life I am hoping to spend my next trip doing this.",
      photos: []
    },
    {
      name: "Santiago, Chile",
      lat: -33.4489, lng: -70.6693,
      dates: "June 25 – 27 · 2 nights",
      activity: "Explore Santiago",
      why: "When I was a young kid, my dad brought me soccer jerseys from his work trips to Santiago; I have always wanted to go for this reason.",
      photos: []
    },
    {
      name: "Easter Island (Rapa Nui), Chile",
      lat: -27.1127, lng: -109.3497,
      dates: "June 27 – July 1 · 4 nights",
      activity: "Explore Easter Island",
      why: "I am curious about seeing the heads, and judging their true size. I have listened to many podcasts about their creation.",
      photos: []
    },
    {
      name: "Valle Nevado, Chile",
      lat: -33.3569, lng: -70.2486,
      dates: "July 1 – 5 · 4 nights",
      activity: "Ski Spot 1!",
      why: "Skiing is my favorite thing in the world.",
      photos: []
    },
    {
      name: "La Parva, Chile",
      lat: -33.3317, lng: -70.2914,
      dates: "July 5 – 9 · 4 nights",
      miles: 6,
      activity: "Ski Spot 2!",
      why: "The happiest I am is when I am skiing.",
      photos: []
    },
    {
      name: "Farellones, Chile",
      lat: -33.3561, lng: -70.3108,
      dates: "July 9 – 13 · 4 nights",
      miles: 3,
      activity: "Ski Spot 3!",
      why: "Wide open runs, bluebird days",
      photos: []
    },

    // --- Argentina (July 2027) ---
    {
      name: "Las Leñas, Argentina",
      lat: -35.1497, lng: -70.0814,
      dates: "July 13 – 19 · 6 nights",
      activity: "Ski Spot 4!",
      why: "Steepest and most alpine terrain in South America, a bucket list for alpine skiers.",
      photos: []
    },
    {
      name: "Cerro Catedral, Bariloche, Argentina",
      lat: -41.17, lng: -71.44,
      dates: "July 19 – 23 · 4 nights",
      activity: "Ski Spot 5!",
      why: "Skiing in Patagonia.",
      photos: []
    },
    {
      name: "Ushuaia, Argentina",
      lat: -54.8019, lng: -68.303,
      dates: "July 23 – 27 · 4 nights",
      activity: "Explore",
      why: "Fin del mundo, the southernmost city in the world.",
      photos: []
    },

    // --- Greenland + Iceland Ring Road (July – August 2027) ---
    {
      name: "Ilulissat, Disko Bay, Greenland",
      lat: 69.2198, lng: -51.0986,
      dates: "July 28 – 30 · 2 nights (after a travel day from Ushuaia on July 27)",
      activity: "See the glaciers of Greenland",
      why: "I have a friend who lived in Greenland and went fishing, and he sent me pictures. They made my day when I got them, and I want to send him one just like that.",
      photos: []
    },
    {
      name: "Nuuk, Greenland",
      lat: 64.1814, lng: -51.6941,
      dates: "July 30 – Aug 1 · 2 nights",
      activity: "See the towns of Greenland",
      why: "I would have to see some civilization if I came to Greenland.",
      photos: []
    },
    {
      name: "Reykjavík, Iceland",
      lat: 64.1466, lng: -21.9426,
      dates: "Aug 1 – 3 · 2 nights (extra day + Ring Road day 1)",
      activity: "Spend a day exploring Reykjavík, pick up the rental car, and soak in the Blue Lagoon.",
      why: "Start of the Iceland trip, explore Reykjavík",
      photos: []
    },
    {
      name: "Golden Circle, Iceland",
      lat: 64.3104, lng: -20.3024,
      dates: "Aug 3 · Ring Road day 2",
      activity: "Walk between the tectonic plates at Þingvellir, watch Strokkur erupt at Geysir, and see Gullfoss waterfall and Kerið crater.",
      why: "Iceland Ring Road!",
      photos: []
    },
    {
      name: "Vík & the South Coast, Iceland",
      lat: 63.4194, lng: -19.006,
      dates: "Aug 4 · Ring Road day 3",
      activity: "Walk behind Seljalandsfoss, climb the stairs beside Skógafoss, and watch the waves roll in on Reynisfjara black sand beach.",
      why: "Iceland Ring Road!",
      photos: []
    },
    {
      name: "Skaftafell, Iceland",
      lat: 64.0167, lng: -16.9667,
      dates: "Aug 5 · Ring Road day 4",
      activity: "Walk the rim of Fjaðrárgljúfur canyon and hike the trails of Skaftafell in Vatnajökull National Park.",
      why: "Iceland Ring Road!",
      photos: []
    },
    {
      name: "Jökulsárlón & Diamond Beach, Iceland",
      lat: 64.0784, lng: -16.2306,
      dates: "Aug 6 · Ring Road day 5",
      activity: "Watch icebergs drift through Jökulsárlón Glacier Lagoon and walk among the ice on Diamond Beach.",
      why: "Iceland Ring Road!",
      photos: []
    },
    {
      name: "Eastfjords, Iceland",
      lat: 65.2653, lng: -14.3948,
      dates: "Aug 7 · Ring Road day 6",
      activity: "Drive through quiet fishing villages and fjords, and hike to Stuðlagil Canyon or Hengifoss.",
      why: "Iceland Ring Road!",
      photos: []
    },
    {
      name: "Dettifoss, Iceland",
      lat: 65.8147, lng: -16.3846,
      dates: "Aug 8 · Ring Road day 7",
      activity: "Stand at the edge of Dettifoss, Europe's most powerful waterfall, and walk through the steaming vents at Hverir.",
      why: "Iceland Ring Road!",
      photos: []
    },
    {
      name: "Akureyri (via Mývatn & Goðafoss), Iceland",
      lat: 65.6885, lng: -18.1262,
      dates: "Aug 9 · Ring Road day 8",
      activity: "Wander Lake Mývatn's pseudocraters, stop at Goðafoss waterfall, and spend the evening in Akureyri.",
      why: "Iceland Ring Road!",
      photos: []
    },
    {
      name: "Tröllaskagi Peninsula, Iceland",
      lat: 66.15, lng: -18.91,
      dates: "Aug 10 · Ring Road day 9",
      activity: "Drive the coast of the Troll Peninsula, pass through Skagafjörður, and head west toward Snæfellsnes.",
      why: "Iceland Ring Road!",
      photos: []
    },
    {
      name: "Kirkjufell, Snæfellsnes, Iceland",
      lat: 64.9417, lng: -23.3059,
      dates: "Aug 11 · Ring Road day 10",
      activity: "See Kirkjufell and its waterfall, then make the final drive back to Reykjavík.",
      why: "Iceland Ring Road!",
      photos: []
    },

    // --- Faroe Islands (August 2027) ---
    {
      name: "Faroe Islands",
      lat: 62.0079, lng: -6.79,
      dates: "Aug 12 – 20 · 8 nights",
      activity: "Hike around the Faroe Islands",
      why: "My girlfriend sends me reels and tells me before we die we have to see the puffins on the Faroe Islands.",
      photos: []
    },

    // --- Norway fjords + Finland (August – September 2027) ---
    {
      name: "Oslo, Norway",
      lat: 59.9139, lng: 10.7522,
      dates: "Aug 20 – 22 · 2 nights",
      activity: "Explore Oslo",
      why: "I never got to go to Oslo and always wanted to.",
      photos: []
    },
    {
      name: "Lysefjord (base: Stavanger), Norway",
      lat: 58.9864, lng: 6.1904,
      dates: "Aug 22 – 24 · 2 nights",
      activity: "Hike Preikestolen (Pulpit Rock) early to beat the crowds, or take on Kjerag, about 11 km round trip out to Kjeragbolten, the boulder wedged between two cliffs. Maybe climb the 4,444 Flørli stairs straight up from the fjord.",
      why: "Scandinavian Fjords!",
      photos: []
    },
    {
      name: "Hardangerfjord (base: Odda), Norway",
      lat: 60.069, lng: 6.5464,
      dates: "Aug 24 – 27 · 3 nights",
      activity: "The big hiking day: Trolltunga, about 20–28 km round trip out to a rock ledge hanging over a lake. Easier days at Vøringsfossen waterfall and the orchards in Øystese.",
      why: "Scandinavian Fjords!",
      photos: []
    },
    {
      name: "Hjørundfjord (base: Ørsta), Norway",
      lat: 62.18, lng: 6.5,
      dates: "Aug 27 – 30 · 3 nights",
      activity: "Hike the Sunnmøre Alps, where peaks like Slogen and Saksa rise straight out of the fjord, with huge views and almost no crowds.",
      why: "Scandinavian Fjords!",
      photos: []
    },
    {
      name: "Lake Saimaa & Savonlinna, Finland",
      lat: 61.8687, lng: 28.8789,
      dates: "Aug 30 – Sep 2 · 3 nights",
      activity: "Stay in a lakeside cottage on Lake Saimaa.",
      why: "See the nature of Finland",
      photos: []
    },
    {
      name: "Helsinki, Finland",
      lat: 60.1699, lng: 24.9384,
      dates: "Sep 2 – 4 · 2 nights",
      activity: "Explore Helsinki",
      why: "See the cities of Finland",
      photos: []
    },

    // --- Copenhagen + London (September 2027) ---
    {
      name: "Copenhagen, Denmark",
      lat: 55.6761, lng: 12.5683,
      dates: "Sep 4 – 11 · 7 nights",
      activity: "Be back in Copenhagen",
      why: "I spent eight months in Copenhagen; I would want to see my friends from there again, and visit all of the pubs and parks I went to again.",
      photos: []
    },
    {
      name: "London, England",
      lat: 51.5074, lng: -0.1278,
      dates: "Sep 11 – 15 · 4 nights",
      activity: "Explore London with my sister",
      why: "My sister got back from London a few weeks ago and doesn't stop talking about how much we need to go together.",
      photos: []
    },

    // --- UK, Ireland + Europe (September – October 2027) ---
    {
      name: "Manchester, England",
      lat: 53.4808, lng: -2.2426,
      dates: "Sep 15 – 17 · 2 nights",
      activity: "Explore Manchester with my sister",
      why: "I want to compare my experience in London to Manchester, so I can accurately pick a favorite soccer team.",
      photos: []
    },
    {
      name: "Dublin, Ireland",
      lat: 53.3498, lng: -6.2603,
      dates: "Sep 17 – 19 · 2 nights",
      activity: "Hang out with all of the other gingers",
      why: "I want to know what it feels like to drink a Guinness in Dublin",
      photos: []
    },
    {
      name: "Galway, Ireland",
      lat: 53.2707, lng: -9.0568,
      dates: "Sep 19 – 21 · 2 nights",
      activity: "Hang out with all of the other gingers",
      why: "I want to know what it's like to drink a Guinness in Galway.",
      photos: []
    },
    {
      name: "Munich, Germany",
      lat: 48.1351, lng: 11.582,
      dates: "Sep 21 – 26 · 5 nights",
      activity: "Visit Sebastian",
      why: "My best friend from exchange lives in Munich. I have not seen him in two years, and I would love to see him again.",
      photos: []
    },
    {
      name: "Lausanne, Switzerland",
      lat: 46.5197, lng: 6.6323,
      dates: "Sep 26 – 29 · 3 nights",
      activity: "Swim in the lake, ride on the Swiss trains",
      why: "I visited my girlfriend in Lausanne one summer, and would classify it as the best ten days of my life.",
      photos: []
    },
    {
      name: "Tour du Mont Blanc (start: Les Houches, France)",
      lat: 45.8908, lng: 6.799,
      dates: "Sep 29 – Oct 7 · 8 days",
      activity: "Hike the Tour du Mont Blanc",
      why: "Bucket list backpacking trip for me.",
      photos: []
    },
    {
      name: "Alpe d'Huez, France",
      lat: 45.092, lng: 6.07,
      dates: "Oct 7 – 9 · 2 nights",
      activity: "Ride Alpe d'Huez",
      why: "My father got me into cycling, and Alpe d'Huez is the most iconic climb in cycling history; I would love to ride it with him.",
      photos: []
    },
    {
      name: "Porto, Portugal",
      lat: 41.1579, lng: -8.6291,
      dates: "Oct 9 – 13 · 4 nights",
      activity: "Explore Porto",
      why: "I went to Lisbon and loved it; I heard Porto was better and could never shake that I went to the wrong place.",
      photos: []
    },
    {
      name: "Mallorca, Spain",
      lat: 39.5696, lng: 2.6502,
      dates: "Oct 13 – 16 · 3 nights",
      activity: "Bike with Dad",
      why: "My dad is going to bike here in a few months, and as he has told me about the trip I have thought it is something I need to do.",
      photos: []
    },

    // --- Morocco, Istanbul + Africa (October – November 2027) ---
    {
      name: "Marrakech, Morocco",
      lat: 31.6295, lng: -7.9811,
      dates: "Oct 16 – 19 · 3 nights",
      activity: "Desert trip",
      why: "I would like the experience of riding camels and finding an oasis with an ice-cold Gatorade (although I'm not sure if the second one is possible).",
      photos: []
    },
    {
      name: "Istanbul, Türkiye",
      lat: 41.0082, lng: 28.9784,
      dates: "Oct 19 – 22 · 3 nights",
      activity: "Ride the hot air balloons",
      why: "I was disappointed that I never made it to Istanbul, and would love to go.",
      photos: []
    },
    {
      name: "Giza (Cairo), Egypt",
      lat: 29.9792, lng: 31.1342,
      dates: "Oct 22 – 25 · 3 nights",
      activity: "See the Pyramids of Giza.",
      why: "I want to see the pyramids",
      photos: []
    },
    {
      name: "Kampala, Uganda",
      lat: 0.3476, lng: 32.5825,
      dates: "Oct 25 – 29 · 4 nights",
      activity: "Visit Anil's family",
      why: "In first year of university, I had a trip booked with three of my friends to visit one's family in Uganda, but there was an Ebola outbreak and we were not able to go.",
      photos: []
    },
    {
      name: "Mount Kilimanjaro, Tanzania",
      lat: -3.0674, lng: 37.3556,
      dates: "Oct 29 – Nov 5 · 7 days",
      activity: "Climb Kilimanjaro over seven days, using Kosovo Camp as the high camp before summit night.",
      why: "Maybe my most unrealistic stop, but I would love to summit Kilimanjaro.",
      photos: []
    },
    {
      name: "Les 3 Baies (near Antsiranana), Madagascar",
      lat: -12.28, lng: 49.39,
      dates: "Nov 5 – 8 · 3 nights",
      activity: "Explore the three bays of Sakalava, Pigeons and Dunes on Madagascar's northern tip.",
      why: "I want to explore Madagascar; my dad would come here for work when I was young.",
      photos: []
    },
    {
      name: "Antananarivo, Madagascar",
      lat: -18.8792, lng: 47.5079,
      dates: "Nov 8 – 12 · 4 nights",
      activity: "Explore Antananarivo",
      why: "Explore a city in Madagascar",
      photos: []
    },
    {
      name: "Jeffreys Bay, South Africa",
      lat: -34.0507, lng: 24.922,
      dates: "Nov 12 – 15 · 3 nights",
      activity: "Surf Jeffreys Bay",
      why: "Most famous surf spot in South Africa",
      photos: []
    },
    {
      name: "Cape Town, South Africa",
      lat: -33.9249, lng: 18.4241,
      dates: "Nov 15 – 19 · 4 nights",
      activity: "Surf in Cape Town",
      why: "Had a friend from Cape Town and he described it as the best surfing in the world.",
      photos: []
    },

    // --- Kyrgyzstan, India + Nepal (November 2027) ---
    {
      name: "Bishkek – Issyk-Kul – Karakol loop, Kyrgyzstan",
      lat: 42.45, lng: 77.25,
      dates: "Nov 19 – 24 · 5 days",
      activity: "A five-day loop from Bishkek out around Issyk-Kul lake to Karakol and back.",
      why: "I have seen too many Instagram reels about Kyrgyzstan not to include it.",
      photos: []
    },
    {
      name: "Agra, India",
      lat: 27.1751, lng: 78.0421,
      dates: "Nov 24 – 26 · 2 nights",
      activity: "Visit the Taj Mahal.",
      why: "I would like to see the Taj Mahal",
      photos: []
    },
    {
      name: "Kathmandu, Nepal",
      lat: 27.7172, lng: 85.324,
      dates: "Nov 26 – 29 · 3 nights",
      activity: "Visit Anil's other side of the family",
      why: "In a few years I will be going to a bachelor party here; I would like to go first on my own to surprise the groom with inside knowledge when we go later.",
      photos: []
    },

    // --- China (November – December 2027) ---
    {
      name: "Zhangjiajie National Forest Park, China",
      lat: 29.3167, lng: 110.4333,
      dates: "Nov 29 – Dec 1 · 2 nights",
      activity: "Explore the forest",
      why: "I loved Avatar as a kid and this is the setting for it.",
      photos: []
    },
    {
      name: "Chongqing, China",
      lat: 29.563, lng: 106.5516,
      dates: "Dec 1 – 3 · 2 nights",
      activity: "Explore Chongqing",
      why: "My friends who went here always say it was their favorite place in China.",
      photos: []
    },
    {
      name: "Beijing, China",
      lat: 39.9042, lng: 116.4074,
      dates: "Dec 3 – 6 · 3 nights",
      activity: "Eat",
      why: "Yang's Dumplings",
      photos: []
    },

    // --- Japan, north to south (December 2027) ---
    {
      name: "Niseko, Hokkaido, Japan",
      lat: 42.8048, lng: 140.6874,
      dates: "Dec 6 – 10 · 4 nights",
      activity: "First skiing experience in Japan",
      why: "I have dreamed 10+ nights about skiing in Japan, I need to ski for at least ten nights.",
      photos: []
    },
    {
      name: "Hakuba Valley, Nagano, Japan",
      lat: 36.6983, lng: 137.8619,
      dates: "Dec 10 – 13 · 3 nights",
      activity: "Ski Olympic terrain with big-mountain scenery",
      why: "I have dreamed 10+ nights about skiing in Japan, I need to ski for at least ten nights.",
      photos: []
    },
    {
      name: "Tokyo, Japan",
      lat: 35.6762, lng: 139.6503,
      dates: "Dec 13 – 16 · 3 nights",
      activity: "Explore Tokyo",
      why: "I will spend three full days to buy all the gifts for my girlfriend for when I return from my journey.",
      photos: []
    },
    {
      name: "Mount Fuji (Lake Kawaguchiko), Japan",
      lat: 35.5, lng: 138.76,
      dates: "Dec 16 – 21 · 5 nights",
      activity: "Ski!",
      why: "I have dreamed 10+ nights about skiing in Japan, I need to ski for at least ten nights.",
      photos: []
    },
    {
      name: "Osaka, Japan",
      lat: 34.6937, lng: 135.5023,
      dates: "Dec 21 – 24 · 3 nights",
      activity: "Relax and eat sushi",
      why: "To close the leg in Japan I will stuff myself with as much fish as I can.",
      photos: []
    },

    // --- Southeast Asia (December 2027) ---
    {
      name: "Hanoi, Vietnam",
      lat: 21.0278, lng: 105.8342,
      dates: "Dec 24 – 26 · 2 nights",
      activity: "Explore Hanoi!",
      why: "I want to see Vietnam and eat.",
      photos: []
    },
    {
      name: "Ho Chi Minh City, Vietnam",
      lat: 10.8231, lng: 106.6297,
      dates: "Dec 26 – 29 · 3 nights",
      activity: "Explore Ho Chi Minh City!",
      why: "I want to see another spot in Vietnam and eat more.",
      photos: []
    },
    {
      name: "Bangkok, Thailand",
      lat: 13.7563, lng: 100.5018,
      dates: "Dec 29, 2027 – Jan 1, 2028 · 3 nights",
      activity: "Visit Arjun",
      why: "One of my good friends at UBC is from Bangkok and has told me that I need to visit him many times.",
      photos: []
    },

    // --- Australia (January 2028) ---
    {
      name: "Sydney, Australia",
      lat: -33.8688, lng: 151.2093,
      dates: "Jan 1 – 5, 2028 · 4 nights",
      activity: "Walk the Bondi to Coogee coastal path, take the harbour ferry to Manly, and wander the Royal Botanic Garden.",
      why: "To keep myself focused for the end of the trip, I have more strict activities to see as much of Australia and New Zealand before I go home.",
      photos: []
    },
    {
      name: "Blue Mountains, Australia",
      lat: -33.712, lng: 150.3119,
      dates: "Jan 5 – 8 · 3 nights",
      activity: "Easy lookout walks around Katoomba: the Three Sisters, the Prince Henry Cliff Walk, and Wentworth Falls.",
      why: "To keep myself focused for the end of the trip, I have more strict activities to see as much of Australia and New Zealand before I go home.",
      photos: []
    },
    {
      name: "Melbourne, Australia",
      lat: -37.8136, lng: 144.9631,
      dates: "Jan 8 – 11 · 3 nights",
      activity: "Explore the city's laneways and take a day trip along the Great Ocean Road to the Twelve Apostles.",
      why: "To keep myself focused for the end of the trip, I have more strict activities to see as much of Australia and New Zealand before I go home.",
      photos: []
    },

    // --- New Zealand (January 2028) ---
    {
      name: "Queenstown, New Zealand",
      lat: -45.0312, lng: 168.6626,
      dates: "Jan 11 – 15 · 4 nights",
      activity: "Lakeside walks, the gondola up Bob's Peak, and a scenic drive out to Glenorchy.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Fiordland: Te Anau & Milford Sound, New Zealand",
      lat: -44.6414, lng: 167.8974,
      dates: "Jan 15 – 17 · 2 nights",
      activity: "Cruise Milford Sound and do short walks in Fiordland National Park, like Key Summit.",
      why: "To keep myself focused for the end of the trip, I have more strict activities to see as much of Australia and New Zealand before I go home.",
      photos: []
    },
    {
      name: "Auckland, New Zealand",
      lat: -36.8485, lng: 174.7633,
      dates: "Jan 17 – 20 · 3 nights",
      activity: "Take the ferry to Waiheke Island and walk up Rangitoto, the volcanic island in the harbour.",
      why: "To keep myself focused for the end of the trip, I have more strict activities to see as much of Australia and New Zealand before I go home.",
      photos: []
    },

    // --- Home ---
    {
      name: "Home — Vancouver, BC",
      lat: 49.2827, lng: -123.1207,
      dates: "Jan 20, 2028 · back home",
      activity: "Fly home from Auckland to Vancouver.",
      why: "Return home from my great adventure.",
      photos: []
    }
  ]
};
