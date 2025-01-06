function updateLight() {
  const lights = document.querySelectorAll("[data-light]");

  const handleMouseMove = (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const quarterWidth = window.innerWidth / 4;
    const halfHeight = window.innerHeight / 2;
    const height15dvh = window.innerHeight * 0.15;
    const width20dvh = window.innerHeight * 0.20;

    const hash = location.hash.slice(1);
  
    lights.forEach((light) => {
      const el = light as HTMLElement;
      const type = light?.getAttribute("data-light") || "bottom";
  
      switch (type) {
        case "bottom":
          el.style.width = '100%';

          if (hash === "about") {
            if (mouseY < height15dvh) {
                el.style.height = Math.max(0, Math.min(100, Math.pow(height15dvh - mouseY, 2.5) / height15dvh)) + "px";
              break;
            } else {
              el.style.height = '0';
              break;
            }
            break;
          }

          el.style.height = Math.max(0, mouseY - window.innerHeight + halfHeight) + "px";
          break;
  
        case "left":
          if(hash === "about") {
            el.style.height = '0';
            break;
          }

          el.style.height = '100%';

          if(hash === "projects") {
            el.style.width = Math.max(0, width20dvh - (window.innerWidth - mouseX)) + "px";
            
            break;
          }

          el.style.width = Math.max(0, quarterWidth - mouseX) + "px";
          break;
  
        case "right":
          if(hash === "about") {
            el.style.height = '0';
            break;
          }
          el.style.height = '100%';

          if(hash === "contact") {
            el.style.width = Math.max(0, window.innerWidth - (mouseX + window.innerWidth - width20dvh)) + "px";
            break;
          }

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
