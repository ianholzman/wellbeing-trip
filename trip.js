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
   - The sample stops below are placeholders only — replace them all.
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
      activity: "Wrap up UBC graduation and set off on the road trip.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Seattle, WA",
      lat: 47.6062, lng: -122.3321,
      dates: "Wed, June 2 · 1 night",
      miles: 140,           // from previous stop (approx. driving)
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Sequim, WA",
      lat: 48.0795, lng: -123.1018,
      dates: "Thu, June 3 · 1 night",
      miles: 70,           // from previous stop (approx. driving)
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "La Push, WA",
      lat: 47.9076, lng: -124.6363,
      dates: "Fri, June 4 · 1 night",
      miles: 88,           // from previous stop (approx. driving)
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Seaside, OR",
      lat: 45.9932, lng: -123.9226,
      dates: "June 5 – 8 · 3 nights",
      miles: 230,           // from previous stop (approx. driving)
      activity: "Head down the coast and stop for three days to surf.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Manzanita, OR",
      lat: 45.7184, lng: -123.9351,
      dates: "June 8 – 10 · 2 nights",
      miles: 25,           // from previous stop (approx. driving)
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Mavericks, Half Moon Bay, CA",
      lat: 37.495, lng: -122.499,
      dates: "June 10 – 11 · 1 night",
      miles: 740,           // from previous stop (approx. driving)
      activity: "Stop for a night just to watch the waves at Mavericks.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Yosemite National Park, CA",
      lat: 37.7456, lng: -119.5936,
      dates: "June 11 – 13 · 2 nights",
      miles: 200,           // from previous stop (approx. driving)
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Sequoia National Park, CA",
      lat: 36.4864, lng: -118.5658,
      dates: "June 13 – 14 · 1 night",
      miles: 175,           // from previous stop (approx. driving)
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Joshua Tree National Park, CA",
      lat: 33.8734, lng: -115.901,
      dates: "June 14 – 16 · 2 nights",
      miles: 330,           // from previous stop (approx. driving)
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "San Diego, CA",
      lat: 32.7157, lng: -117.1611,
      dates: "June 16 – 17 · 1 night",
      miles: 175,           // from previous stop (approx. driving)
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- South America: Peru + Chile (June – July 2027) ---
    {
      name: "Cusco, Peru",
      lat: -13.532, lng: -71.9675,
      dates: "June 17 – 20 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Inca Trail to Machu Picchu, Peru",
      lat: -13.1631, lng: -72.545,
      dates: "June 20 – 25 · 5 days",
      activity: "Hike the Inca Trail over five days, finishing at Machu Picchu.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Santiago, Chile",
      lat: -33.4489, lng: -70.6693,
      dates: "June 25 – 27 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Easter Island (Rapa Nui), Chile",
      lat: -27.1127, lng: -109.3497,
      dates: "June 27 – July 1 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Valle Nevado, Chile",
      lat: -33.3569, lng: -70.2486,
      dates: "July 1 – 5 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "La Parva, Chile",
      lat: -33.3317, lng: -70.2914,
      dates: "July 5 – 9 · 4 nights",
      miles: 6,
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Farellones, Chile",
      lat: -33.3561, lng: -70.3108,
      dates: "July 9 – 13 · 4 nights",
      miles: 3,
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Argentina (July 2027) ---
    {
      name: "Las Leñas, Argentina",
      lat: -35.1497, lng: -70.0814,
      dates: "July 13 – 19 · 6 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Cerro Catedral, Bariloche, Argentina",
      lat: -41.17, lng: -71.44,
      dates: "July 19 – 23 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Ushuaia, Argentina",
      lat: -54.8019, lng: -68.303,
      dates: "July 23 – 27 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Greenland + Iceland Ring Road (July – August 2027) ---
    {
      name: "Ilulissat, Disko Bay, Greenland",
      lat: 69.2198, lng: -51.0986,
      dates: "July 28 – 30 · 2 nights (after a travel day from Ushuaia on July 27)",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Nuuk, Greenland",
      lat: 64.1814, lng: -51.6941,
      dates: "July 30 – Aug 1 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Reykjavík, Iceland",
      lat: 64.1466, lng: -21.9426,
      dates: "Aug 1 – 3 · 2 nights (extra day + Ring Road day 1)",
      activity: "Settle in to Reykjavík for a day, then pick up the rental car, soak in the Blue Lagoon or Sky Lagoon, and spend another night exploring the city.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Golden Circle, Iceland",
      lat: 64.3104, lng: -20.3024,
      dates: "Aug 3 · Ring Road day 2",
      activity: "Drive the Golden Circle: Þingvellir National Park, the Geysir geothermal area (Strokkur), Gullfoss waterfall, and Kerið crater.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Vík & the South Coast, Iceland",
      lat: 63.4194, lng: -19.006,
      dates: "Aug 4 · Ring Road day 3",
      activity: "Stop at Seljalandsfoss and Skógafoss, walk Reynisfjara black sand beach, and stay near Vík.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Skaftafell, Iceland",
      lat: 64.0167, lng: -16.9667,
      dates: "Aug 5 · Ring Road day 4",
      activity: "Explore Fjaðrárgljúfur canyon and hike the trails of Skaftafell in Vatnajökull National Park.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Jökulsárlón & Diamond Beach, Iceland",
      lat: 64.0784, lng: -16.2306,
      dates: "Aug 6 · Ring Road day 5",
      activity: "See the icebergs in Jökulsárlón Glacier Lagoon and the ice on Diamond Beach, then head toward the Eastfjords.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Eastfjords, Iceland",
      lat: 65.2653, lng: -14.3948,
      dates: "Aug 7 · Ring Road day 6",
      activity: "Wind through quiet fishing villages and fjords, with stops at Stuðlagil Canyon or Hengifoss.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Dettifoss, Iceland",
      lat: 65.8147, lng: -16.3846,
      dates: "Aug 8 · Ring Road day 7",
      activity: "Visit Dettifoss, Europe's most powerful waterfall, and the Hverir geothermal area.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Akureyri (via Mývatn & Goðafoss), Iceland",
      lat: 65.6885, lng: -18.1262,
      dates: "Aug 9 · Ring Road day 8",
      activity: "Tour Lake Mývatn's pseudocraters and Goðafoss waterfall, then spend the evening in Akureyri.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Tröllaskagi Peninsula, Iceland",
      lat: 66.15, lng: -18.91,
      dates: "Aug 10 · Ring Road day 9",
      activity: "Drive the Troll Peninsula and Skagafjörður, then head toward Borgarnes or the Snæfellsnes Peninsula.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Kirkjufell, Snæfellsnes, Iceland",
      lat: 64.9417, lng: -23.3059,
      dates: "Aug 11 · Ring Road day 10",
      activity: "Visit Kirkjufell mountain and waterfall, then make the final drive back to Reykjavík.",
      why: "[Your words]",
      photos: []
    },

    // --- Faroe Islands (August 2027) ---
    {
      name: "Faroe Islands",
      lat: 62.0079, lng: -6.79,
      dates: "Aug 12 – 20 · 8 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Norway fjords + Finland (August – September 2027) ---
    {
      name: "Oslo, Norway",
      lat: 59.9139, lng: 10.7522,
      dates: "Aug 20 – 22 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Lysefjord (base: Stavanger), Norway",
      lat: 58.9864, lng: 6.1904,
      dates: "Aug 22 – 24 · 2 nights",
      activity: "Hike Preikestolen (Pulpit Rock) early to beat the crowds, or take on Kjerag, about 11 km round trip out to Kjeragbolten, the boulder wedged between two cliffs. Maybe climb the 4,444 Flørli stairs straight up from the fjord.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Hardangerfjord (base: Odda), Norway",
      lat: 60.069, lng: 6.5464,
      dates: "Aug 24 – 27 · 3 nights",
      activity: "The big hiking day: Trolltunga, about 20–28 km round trip out to a rock ledge hanging over a lake. Easier days at Vøringsfossen waterfall and the orchards in Øystese.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Hjørundfjord (base: Ørsta), Norway",
      lat: 62.18, lng: 6.5,
      dates: "Aug 27 – 30 · 3 nights",
      activity: "Hike the Sunnmøre Alps, where peaks like Slogen and Saksa rise straight out of the fjord, with huge views and almost no crowds.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Lake Saimaa & Savonlinna, Finland",
      lat: 61.8687, lng: 28.8789,
      dates: "Aug 30 – Sep 2 · 3 nights",
      activity: "Classic Finnish Lakeland: stay in a lakeside cottage on Lake Saimaa.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Helsinki, Finland",
      lat: 60.1699, lng: 24.9384,
      dates: "Sep 2 – 4 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Copenhagen + London (September 2027) ---
    {
      name: "Copenhagen, Denmark",
      lat: 55.6761, lng: 12.5683,
      dates: "Sep 4 – 11 · 7 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "London, England",
      lat: 51.5074, lng: -0.1278,
      dates: "Sep 11 – 15 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- UK, Ireland + Europe (September – October 2027) ---
    {
      name: "Manchester, England",
      lat: 53.4808, lng: -2.2426,
      dates: "Sep 15 – 17 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Dublin, Ireland",
      lat: 53.3498, lng: -6.2603,
      dates: "Sep 17 – 19 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Galway, Ireland",
      lat: 53.2707, lng: -9.0568,
      dates: "Sep 19 – 21 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Munich, Germany",
      lat: 48.1351, lng: 11.582,
      dates: "Sep 21 – 26 · 5 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Lausanne, Switzerland",
      lat: 46.5197, lng: 6.6323,
      dates: "Sep 26 – 29 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Tour du Mont Blanc (start: Les Houches, France)",
      lat: 45.8908, lng: 6.799,
      dates: "Sep 29 – Oct 7 · 8 days",
      activity: "Hike the Tour du Mont Blanc over eight days, circling Mont Blanc through France, Italy and Switzerland.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Alpe d'Huez, France",
      lat: 45.092, lng: 6.07,
      dates: "Oct 7 – 9 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Porto, Portugal",
      lat: 41.1579, lng: -8.6291,
      dates: "Oct 9 – 13 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Mallorca, Spain",
      lat: 39.5696, lng: 2.6502,
      dates: "Oct 13 – 16 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Morocco, Istanbul + Africa (October – November 2027) ---
    {
      name: "Marrakech, Morocco",
      lat: 31.6295, lng: -7.9811,
      dates: "Oct 16 – 19 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Istanbul, Türkiye",
      lat: 41.0082, lng: 28.9784,
      dates: "Oct 19 – 22 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Giza (Cairo), Egypt",
      lat: 29.9792, lng: 31.1342,
      dates: "Oct 22 – 25 · 3 nights",
      activity: "See the Pyramids of Giza.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Kampala, Uganda",
      lat: 0.3476, lng: 32.5825,
      dates: "Oct 25 – 29 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Mount Kilimanjaro, Tanzania",
      lat: -3.0674, lng: 37.3556,
      dates: "Oct 29 – Nov 5 · 7 days",
      activity: "Climb Kilimanjaro over seven days, using Kosovo Camp as the high camp before summit night.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Les 3 Baies (near Antsiranana), Madagascar",
      lat: -12.28, lng: 49.39,
      dates: "Nov 5 – 8 · 3 nights",
      activity: "Explore the three bays of Sakalava, Pigeons and Dunes on Madagascar's northern tip.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Antananarivo, Madagascar",
      lat: -18.8792, lng: 47.5079,
      dates: "Nov 8 – 12 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Jeffreys Bay, South Africa",
      lat: -34.0507, lng: 24.922,
      dates: "Nov 12 – 15 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Cape Town, South Africa",
      lat: -33.9249, lng: 18.4241,
      dates: "Nov 15 – 19 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Kyrgyzstan, India + Nepal (November 2027) ---
    {
      name: "Bishkek – Issyk-Kul – Karakol loop, Kyrgyzstan",
      lat: 42.45, lng: 77.25,
      dates: "Nov 19 – 24 · 5 days",
      activity: "A five-day loop from Bishkek out around Issyk-Kul lake to Karakol and back.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Agra, India",
      lat: 27.1751, lng: 78.0421,
      dates: "Nov 24 – 26 · 2 nights",
      activity: "Visit the Taj Mahal.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Kathmandu, Nepal",
      lat: 27.7172, lng: 85.324,
      dates: "Nov 26 – 29 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- China (November – December 2027) ---
    {
      name: "Zhangjiajie National Forest Park, China",
      lat: 29.3167, lng: 110.4333,
      dates: "Nov 29 – Dec 1 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Chongqing, China",
      lat: 29.563, lng: 106.5516,
      dates: "Dec 1 – 3 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Beijing, China",
      lat: 39.9042, lng: 116.4074,
      dates: "Dec 3 – 6 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Japan, north to south (December 2027) ---
    {
      name: "Niseko, Hokkaido, Japan",
      lat: 42.8048, lng: 140.6874,
      dates: "Dec 6 – 10 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Hakuba Valley, Nagano, Japan",
      lat: 36.6983, lng: 137.8619,
      dates: "Dec 10 – 13 · 3 nights",
      activity: "Ski Olympic terrain with big-mountain scenery.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Tokyo, Japan",
      lat: 35.6762, lng: 139.6503,
      dates: "Dec 13 – 16 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Mount Fuji (Lake Kawaguchiko), Japan",
      lat: 35.5, lng: 138.76,
      dates: "Dec 16 – 21 · 5 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Osaka, Japan",
      lat: 34.6937, lng: 135.5023,
      dates: "Dec 21 – 24 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Southeast Asia (December 2027) ---
    {
      name: "Hanoi, Vietnam",
      lat: 21.0278, lng: 105.8342,
      dates: "Dec 24 – 26 · 2 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Ho Chi Minh City, Vietnam",
      lat: 10.8231, lng: 106.6297,
      dates: "Dec 26 – 29 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Bangkok, Thailand",
      lat: 13.7563, lng: 100.5018,
      dates: "Dec 29, 2027 – Jan 1, 2028 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Australia (January 2028) ---
    {
      name: "Sydney, Australia",
      lat: -33.8688, lng: 151.2093,
      dates: "Jan 1 – 5, 2028 · 4 nights",
      activity: "Walk the Bondi to Coogee coastal path, take the harbour ferry to Manly, and wander the Royal Botanic Garden.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Blue Mountains, Australia",
      lat: -33.712, lng: 150.3119,
      dates: "Jan 5 – 8 · 3 nights",
      activity: "Easy lookout walks around Katoomba: the Three Sisters, the Prince Henry Cliff Walk, and Wentworth Falls.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Melbourne, Australia",
      lat: -37.8136, lng: 144.9631,
      dates: "Jan 8 – 11 · 3 nights",
      activity: "Explore the city's laneways and take a day trip along the Great Ocean Road to the Twelve Apostles.",
      why: "[Your words]",
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
      why: "[Your words]",
      photos: []
    },
    {
      name: "Auckland, New Zealand",
      lat: -36.8485, lng: 174.7633,
      dates: "Jan 17 – 20 · 3 nights",
      activity: "Take the ferry to Waiheke Island and walk up Rangitoto, the volcanic island in the harbour.",
      why: "[Your words]",
      photos: []
    },

    // --- Home ---
    {
      name: "Home — Vancouver, BC",
      lat: 49.2827, lng: -123.1207,
      dates: "Jan 20, 2028 · back home",
      activity: "Fly home from Auckland to Vancouver.",
      why: "[Your words]",
      photos: []
    }
  ]
};
