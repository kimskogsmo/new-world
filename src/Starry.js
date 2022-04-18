function rnd(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const options = {
  stars: 800,
  speed: 1,
  layers: 3, // will split stars / layers
  element: "starfield", // id
};

export default class BackgroundGenerator {
  constructor(config) {
    this.stars = config.stars;
    this.speed = config.speed;
    this.layers = config.layers;
    this.element = config.element;
    this.canvas = null;

    if (document.getElementById("starfield"))
      this.canvas = document.getElementById("starfield");

    this.init();
  }

  getWindowHeight() {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    return {
      width,
      height,
    };
  }

  paint() {
    const layers = this.canvas.querySelector(".layer");
  }

  createStar() {
    const x = rnd(0, 100);
    const y = rnd(0, 100);
    const size = rnd(0, 2);
    const s = document.createElement("div");
    s.classList.add("star");
    s.style.top = y + "vh";
    s.style.left = x + "vw";
    s.style.width = size + "px";
    s.style.height = size + "px";

    return s;
  }

  dispose() {}

  createLayers() {
    let lvl = 1;
    for (let j = 0; j < this.layers; j++) {
      const l = document.createElement("div");
      l.classList.add("layer");
      l.dataset.level = lvl;

      for (let i = 0; i < this.stars / this.layers; i++) {
        const star = this.createStar();

        l.append(star);
      }

      this.canvas.append(l);

      lvl++;
    }

    this.animate();
  }

  animate() {
    const layers = document.querySelectorAll(".layer");
  }

  init() {
    const { height, width } = this.getWindowHeight();

    this.createLayers();
  }

  fill() {}
}
