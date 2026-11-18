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

  // Themes colour-code the stops. Rename, recolour, add or remove freely.
  themes: {
    movement:   { label: "Movement",   color: "#5ec8ff" },
    community:  { label: "Community",  color: "#ffb74d" },
    rest:       { label: "Rest",       color: "#9be7a6" },
    connection: { label: "Connection", color: "#ff8a9a" },
    curiosity:  { label: "Curiosity",  color: "#c79bff" }
  },

  stops: [
    // --- Road trip: Vancouver to San Diego (June 2027) ---
    {
      name: "Vancouver, BC",
      lat: 49.2827, lng: -123.1207,
      dates: "Tue, June 1, 2027 · Day 1, start of the road trip",
      theme: "connection",
      activity: "Wrap up UBC graduation and set off on the road trip.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Seattle, WA",
      lat: 47.6062, lng: -122.3321,
      dates: "Wed, June 2 · 1 night",
      theme: "community",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Sequim, WA",
      lat: 48.0795, lng: -123.1018,
      dates: "Thu, June 3 · 1 night",
      theme: "rest",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "La Push, WA",
      lat: 47.9076, lng: -124.6363,
      dates: "Fri, June 4 · 1 night",
      theme: "rest",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Seaside, OR",
      lat: 45.9932, lng: -123.9226,
      dates: "June 5 – 8 · 3 nights",
      theme: "movement",
      activity: "Head down the coast and stop for three days to surf.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Manzanita, OR",
      lat: 45.7184, lng: -123.9351,
      dates: "June 8 – 10 · 2 nights",
      theme: "rest",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Mavericks, Half Moon Bay, CA",
      lat: 37.495, lng: -122.499,
      dates: "June 10 – 11 · 1 night",
      theme: "curiosity",
      activity: "Stop for a night just to watch the waves at Mavericks.",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Sequoia National Park, CA",
      lat: 36.4864, lng: -118.5658,
      dates: "June 11 – 12 · 1 night",
      theme: "curiosity",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Yosemite National Park, CA",
      lat: 37.7456, lng: -119.5936,
      dates: "June 12 – 14 · 2 nights",
      theme: "movement",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Joshua Tree National Park, CA",
      lat: 33.8734, lng: -115.901,
      dates: "June 14 – 16 · 2 nights",
      theme: "rest",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "San Diego, CA",
      lat: 32.7157, lng: -117.1611,
      dates: "June 16 – 17 · 1 night",
      theme: "community",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    }

    // --- Add the rest of the year below ---
  ]
};
