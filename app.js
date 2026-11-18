/* app.js — you shouldn't need to edit this. All content is in trip.js. */
(function () {
  const T = window.TRIP;
  const stops = T.stops.map((s, i) => ({ ...s, i }));
  const n = stops.length;
  const $ = (id) => document.getElementById(id);
  const POINT_COLOR = "#ffd27a";

  let current = -1;
  let playing = false;
  let timer = null;
  const STEP_MS = 5000; // time spent on each stop while playing

  /* ---------- Header ---------- */
  document.title = T.title.replace(/^\[|\]$/g, "") || "A Year of Wellbeing";
  $("title").textContent = T.title;
  $("subtitle").textContent = T.subtitle;

  /* ---------- Miles ---------- */
  // Each stop's `miles` = distance from the previous stop. If missing, use
  // the straight-line (great-circle) distance instead.
  function haversineMi(a, b) {
    const R = 3958.8, rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  const legMiles = stops.map((s, i) =>
    i === 0 ? 0 : typeof s.miles === "number" ? s.miles : Math.round(haversineMi(stops[i - 1], s)));
  const cumMiles = legMiles.map((_, i) => legMiles.slice(0, i + 1).reduce((x, y) => x + y, 0));
  const totalMiles = cumMiles[n - 1] || 0;
  const fmt = (m) => Math.round(m).toLocaleString();
  $("milesTotal").textContent = `of ~${fmt(totalMiles)}`;

  let shownMiles = 0, milesAnim = null;
  function animateMiles(target) {
    cancelAnimationFrame(milesAnim);
    const from = shownMiles, t0 = performance.now(), dur = 1600;
    const step = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      shownMiles = from + (target - from) * (1 - Math.pow(1 - p, 3));
      $("milesNow").textContent = fmt(shownMiles);
      if (p < 1) milesAnim = requestAnimationFrame(step);
    };
    milesAnim = requestAnimationFrame(step);
  }

  /* ---------- Globe ---------- */
  const el = $("globe");
  let globe = new Globe(el);
  if (typeof globe === "function") globe = globe(el); // older globe.gl versions

  const arcs = stops.slice(1).map((s, k) => ({
    startLat: stops[k].lat, startLng: stops[k].lng,
    endLat: s.lat, endLng: s.lng, idx: k + 1
  }));

  globe
    .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
    .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
    .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")
    .width(window.innerWidth).height(window.innerHeight)
    .pointLat("lat").pointLng("lng")
    .pointColor(() => POINT_COLOR)
    .pointAltitude((d) => (d.i === current ? 0.06 : 0.015))
    .pointRadius((d) => (d.i === current ? 0.55 : 0.38))
    .pointsMerge(false)
    .pointLabel((d) => `<div style="font:13px Inter,sans-serif;padding:4px 8px;background:rgba(0,0,0,.7);border-radius:6px">
        <b>${esc(d.name)}</b><br>${esc(d.dates || "")}</div>`)
    .onPointClick((d) => { pause(); goTo(d.i); })
    .arcStartLat("startLat").arcStartLng("startLng").arcEndLat("endLat").arcEndLng("endLng")
    .arcColor((a) => (a.idx <= current ? ["rgba(255,210,122,0.9)", "rgba(255,255,255,0.9)"] : ["rgba(255,255,255,0.18)", "rgba(255,255,255,0.18)"]))
    .arcStroke((a) => (a.idx === current ? 0.9 : 0.45))
    .arcDashLength((a) => (a.idx === current ? 0.5 : 1))
    .arcDashGap((a) => (a.idx === current ? 0.15 : 0))
    .arcDashAnimateTime((a) => (a.idx === current ? 1800 : 0))
    .arcAltitudeAutoScale(0.45)
    .ringLat("lat").ringLng("lng")
    .ringColor(() => (t) => `rgba(255,210,122,${1 - t})`)
    .ringMaxRadius(4).ringPropagationSpeed(2.5).ringRepeatPeriod(1200);

  refresh();
  globe.pointOfView({ lat: stops[0]?.lat || 20, lng: stops[0]?.lng || 0, altitude: 2.6 }, 0);
  globe.controls().autoRotate = true;
  globe.controls().autoRotateSpeed = 0.4;

  window.addEventListener("resize", () => globe.width(window.innerWidth).height(window.innerHeight));

  function refresh() {
    globe.pointsData(stops.slice());
    globe.arcsData(arcs.slice());
    globe.ringsData(current >= 0 ? [stops[current]] : []);
  }

  /* ---------- Navigation ---------- */
  const slider = $("slider");
  slider.max = Math.max(n - 1, 0);

  function goTo(i) {
    if (i < 0 || i >= n) return;
    current = i;
    const s = stops[i];
    globe.controls().autoRotate = false;
    globe.pointOfView({ lat: s.lat, lng: s.lng, altitude: 1.7 }, 1600);
    refresh();
    showPanel(s);
    slider.value = i;
    $("stepLabel").textContent = `${i + 1} / ${n}`;
    animateMiles(cumMiles[i]);
  }

  function showPanel(s) {
    $("pStep").textContent = `Stop ${s.i + 1} of ${n}`;
    $("pName").textContent = s.name;
    $("pDates").textContent = s.dates || "";
    $("pLeg").textContent = s.i === 0 ? "Starting point"
      : `${fmt(legMiles[s.i])} mi from ${stops[s.i - 1].name} · ${fmt(cumMiles[s.i])} mi so far`;
    $("pActivity").textContent = s.activity || "";
    $("pWhy").textContent = s.why || "";
    const photos = $("pPhotos");
    photos.innerHTML = "";
    (s.photos || []).forEach((p) => {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
      img.src = typeof p === "string" ? p : p.src;
      img.alt = (p && p.caption) || s.name;
      img.loading = "lazy";
      fig.append(img);
      if (p && p.caption) {
        const cap = document.createElement("figcaption");
        cap.textContent = p.caption;
        fig.append(cap);
      }
      photos.append(fig);
    });
    $("panel").classList.remove("hidden");
    $("panel").scrollTop = 0;
  }

  function play() {
    playing = true;
    $("playBtn").textContent = "❚❚";
    $("playBtn").setAttribute("aria-label", "Pause");
    if (current < 0 || current >= n - 1) goTo(0);
    timer = setInterval(() => {
      if (current >= n - 1) { pause(); showOverlay("closing"); return; }
      goTo(current + 1);
    }, STEP_MS);
  }
  function pause() {
    playing = false;
    clearInterval(timer);
    $("playBtn").textContent = "▶";
    $("playBtn").setAttribute("aria-label", "Play");
  }

  $("playBtn").onclick = () => (playing ? pause() : play());
  $("nextBtn").onclick = () => { pause(); goTo(Math.min(current + 1, n - 1)); };
  $("prevBtn").onclick = () => { pause(); goTo(Math.max(current - 1, 0)); };
  slider.oninput = () => { pause(); goTo(+slider.value); };
  $("closePanel").onclick = () => $("panel").classList.add("hidden");
  document.addEventListener("keydown", (e) => {
    if (!$("overlay").classList.contains("hidden")) return;
    if (e.key === "ArrowRight") $("nextBtn").click();
    if (e.key === "ArrowLeft") $("prevBtn").click();
    if (e.key === " ") { e.preventDefault(); $("playBtn").click(); }
  });

  /* ---------- Overlay (intro / closing / about) ---------- */
  function showOverlay(mode) {
    const refs = $("oRefs");
    refs.innerHTML = "";
    if (mode === "intro") {
      $("oEyebrow").textContent = T.author || "";
      $("oTitle").textContent = T.title;
      $("oBody").textContent = T.intro;
      $("beginBtn").textContent = "Begin the journey";
      $("exploreBtn").textContent = "Explore freely";
    } else {
      $("oEyebrow").textContent = mode === "closing" ? "Journey's end" : "About this project";
      $("oTitle").textContent = mode === "closing" ? "Coming home" : T.title;
      $("oBody").textContent = mode === "about" ? `${T.intro}\n\n${T.closing}` : T.closing;
      if (T.references && T.references.length) {
        const h = document.createElement("h3");
        h.textContent = "References";
        refs.append(h);
        T.references.forEach((r) => { const p = document.createElement("p"); p.textContent = r; refs.append(p); });
      }
      $("beginBtn").textContent = "Replay the journey";
      $("exploreBtn").textContent = "Keep exploring";
    }
    $("overlay").classList.remove("hidden");
  }
  $("beginBtn").onclick = () => { $("overlay").classList.add("hidden"); pause(); current = -1; play(); };
  $("exploreBtn").onclick = () => $("overlay").classList.add("hidden");
  $("aboutBtn").onclick = () => { pause(); showOverlay("about"); };

  $("stepLabel").textContent = `0 / ${n}`;
  showOverlay("intro");

  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
})();
