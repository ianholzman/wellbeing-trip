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

    // --- Cayman Islands (August 2027) ---
    {
      name: "Grand Cayman, Cayman Islands",
      lat: 19.2869, lng: -81.3674,
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
      name: "Lausanne, Switzerland",
      lat: 46.5197, lng: 6.6323,
      dates: "Sep 21 – 24 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Tour du Mont Blanc (start: Les Houches, France)",
      lat: 45.8908, lng: 6.799,
      dates: "Sep 24 – Oct 2 · 8 days",
      activity: "Hike the Tour du Mont Blanc over eight days, circling Mont Blanc through France, Italy and Switzerland.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Porto, Portugal",
      lat: 41.1579, lng: -8.6291,
      dates: "Oct 2 – 6 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Mallorca, Spain",
      lat: 39.5696, lng: 2.6502,
      dates: "Oct 6 – 9 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },

    // --- Africa (October – November 2027) ---
    {
      name: "Marrakech, Morocco",
      lat: 31.6295, lng: -7.9811,
      dates: "Oct 9 – 12 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Giza (Cairo), Egypt",
      lat: 29.9792, lng: 31.1342,
      dates: "Oct 12 – 15 · 3 nights",
      activity: "See the Pyramids of Giza.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Kampala, Uganda",
      lat: 0.3476, lng: 32.5825,
      dates: "Oct 15 – 19 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Mount Kilimanjaro, Tanzania",
      lat: -3.0674, lng: 37.3556,
      dates: "Oct 19 – 26 · 7 days",
      activity: "Climb Kilimanjaro over seven days, using Kosovo Camp as the high camp before summit night.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Les 3 Baies (near Antsiranana), Madagascar",
      lat: -12.28, lng: 49.39,
      dates: "Oct 26 – 29 · 3 nights",
      activity: "Explore the three bays of Sakalava, Pigeons and Dunes on Madagascar's northern tip.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Antananarivo, Madagascar",
      lat: -18.8792, lng: 47.5079,
      dates: "Oct 29 – Nov 2 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Jeffreys Bay, South Africa",
      lat: -34.0507, lng: 24.922,
      dates: "Nov 2 – 5 · 3 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Cape Town, South Africa",
      lat: -33.9249, lng: 18.4241,
      dates: "Nov 5 – 9 · 4 nights",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    }

    // --- Add the rest of the year below ---
  ]
};
