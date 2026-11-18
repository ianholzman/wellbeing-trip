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
    {
      name: "Vancouver, Canada",            // SAMPLE — replace
      lat: 49.2827, lng: -123.1207,
      dates: "January",
      theme: "connection",
      activity: "[What you'd do here]",
      why: "[Your words: why this stop is on the trip and what it says about your wellbeing.]",
      photos: []
    },
    {
      name: "Sample stop — Japan",          // SAMPLE — replace
      lat: 42.8048, lng: 140.6874,
      dates: "February",
      theme: "movement",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Sample stop — New Zealand",    // SAMPLE — replace
      lat: -45.0312, lng: 168.6626,
      dates: "March – April",
      theme: "curiosity",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Sample stop — Portugal",       // SAMPLE — replace
      lat: 38.7223, lng: -9.1393,
      dates: "May",
      theme: "rest",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Sample stop — USA",            // SAMPLE — replace
      lat: 39.7392, lng: -104.9903,
      dates: "June",
      theme: "community",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    },
    {
      name: "Home — Vancouver, Canada",     // SAMPLE — replace
      lat: 49.2827, lng: -123.1207,
      dates: "December",
      theme: "connection",
      activity: "[What you'd do here]",
      why: "[Your words]",
      photos: []
    }
  ]
};
