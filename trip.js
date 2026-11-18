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
    }

    // --- Add the rest of the year below ---
  ]
};
