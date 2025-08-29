const planets = [
  { name: "Mercury", color: "#9aa3a7", moons: 0 },
  { name: "Venus",   color: "#c9a36b", moons: 0 },
  { name: "Earth",   color: "#3b82f6", moons: 1 },
  { name: "Mars",    color: "#e06648", moons: 2 },
  { name: "Jupiter", color: "#d7b894", moons: 80 },
  { name: "Saturn",  color: "#d8c58b", moons: 83 },
  { name: "Uranus",  color: "#7dd3fc", moons: 27 },
  { name: "Neptune", color: "#60a5fa", moons: 14 }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".listPlanets");

  Object.assign(container.style, {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    alignItems: "center",
    justifyContent: "center"
  });

  planets.forEach(p => {
    const planet = document.createElement("div");
    planet.className = "planet";
    planet.title = p.name;
    Object.assign(planet.style, {
      backgroundColor: p.color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "700",
      textShadow: "0 1px 2px rgba(0,0,0,.6)",
      margin: "12px",
      boxShadow: "0 6px 16px rgba(0,0,0,.35)"
    });
    planet.textContent = p.name;
    container.appendChild(planet);
    const moonsCount = p.moons || 0;
    if (moonsCount > 0) {
      for (let i = 0; i < moonsCount; i++) {
        const moon = document.createElement("div");
        moon.className = "moon";
        const angle = (i / moonsCount) * 360;
        const ring = Math.floor(i / 12); 
        const radius = 70 + ring * 16;   
        Object.assign(moon.style, {
          left: "50%",
          top: "50%",
          transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
          boxShadow: "0 2px 6px rgba(0,0,0,.4)"
        });

        planet.appendChild(moon);
      }
    }
  });
});
