function updateLight() {
  const lights = document.querySelectorAll("[data-light]");

  const handleMouseMove = (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const quarterWidth = window.innerWidth / 4;
    const halfHeight = window.innerHeight / 2;
  
    lights.forEach((light) => {
      const el = light as HTMLElement;
      const type = light?.getAttribute("data-light") || "bottom";
  
      switch (type) {
        case "bottom":
          el.style.width = '100%';
          el.style.height = Math.max(0, mouseY - window.innerHeight + halfHeight) + "px";
          break;
  
        case "left":
          el.style.height = '100%';
          el.style.width = Math.max(0, quarterWidth - mouseX) + "px";
          break;
  
        case "right":
          el.style.height = '100%';
          el.style.width = Math.max(0, mouseX - (window.innerWidth - quarterWidth)) + "px";
          break;
  
        default:
          break;
      }
    });
  };

  document.addEventListener("mousemove", handleMouseMove);
}

document.addEventListener("DOMContentLoaded", () => {
  updateLight()
})
