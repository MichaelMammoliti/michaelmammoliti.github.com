import type { PortfolioItem } from "./types";

export const menuItems = ["Home", "Portfolio", "Contacts", "About"];

const assets = {
  gillette: {
    desktop: {
      video: "./public/gillette-desktop.mp4",
      thumbnail: "./public/gillette-desktop-thumb.png",
    },
    mobile: {
      video: "./public/gillette-mobile.mp4",
      thumbnail: "./public/gillette-mobile-thumb.png",
    },
    thumbnail: "./public/gillette-homepage.jpg",
  },
  enterogermina: {
    desktop: {
      video: "./public/enterogermina-desktop.mp4",
      thumbnail: "./public/enterogermina-desktop-thumb.png",
    },
    mobile: {
      video: "./public/enterogermina-mobile.mp4",
      thumbnail: "./public/enterogermina-mobile-thumb.png",
    },
    thumbnail: "./public/enterogermina-homepage.jpg",
  },
  appleswitcher: {
    desktop: {
      video: "./public/appleswitcher-desktop.mp4",
      thumbnail: "./public/appleswitcher-desktop-thumb.png",
    },
    mobile: {
      video: "./public/appleswitcher-mobile.mp4",
      thumbnail: "./public/appleswitcher-mobile-thumb.png",
    },
    thumbnail: "./public/appleswitcher-homepage.jpg",
  },
  loreal: {
    desktop: {
      video: "./public/loreal-desktop.mp4",
      thumbnail: "./public/loreal-desktop-thumb.png",
    },
    mobile: {
      video: "./public/loreal-mobile.mp4",
      thumbnail: "./public/loreal-mobile-thumb.png",
    },
    thumbnail: "./public/loreal-homepage.jpg",
  },
  braunipl: {
    desktop: {
      video: "./public/braunipl-desktop.mp4",
      thumbnail: "./public/braunipl-desktop-thumb.png",
    },
    mobile: {
      video: "./public/braunipl-mobile.mp4",
      thumbnail: "./public/braunipl-mobile-thumb.png",
    },
    thumbnail: "./public/braunipl-homepage.jpg",
  },
  braunrazor: {
    desktop: {
      video: "./public/braunrazor-desktop.mp4",
      thumbnail: "./public/braunrazor-desktop-thumb.png",
    },
    mobile: {
      video: "./public/braunrazor-mobile.mp4",
      thumbnail: "./public/braunrazor-mobile-thumb.png",
    },
    thumbnail: "./public/braunrazor-homepage.jpg",
  },
  sheebahope: {
    desktop: {
      video: "./public/sheebahope-desktop.mp4",
      thumbnail: "./public/sheebahope-desktop-thumb.png",
    },
    mobile: {
      video: "./public/sheebahope-mobile.mp4",
      thumbnail: "./public/sheebahope-mobile-thumb.png",
    },
    thumbnail: "./public/sheebahope-homepage.jpg",
  },
  whiskas: {
    desktop: {
      video: "./public/whiskas-desktop.mp4",
      thumbnail: "./public/whiskas-desktop-thumb.png",
    },
    mobile: {
      video: "./public/whiskas-mobile.mp4",
      thumbnail: "./public/whiskas-mobile-thumb.png",
    },
    thumbnail: "./public/whiskas-homepage.jpg",
  },
  cocacola: {
    desktop: {
      video: "./public/cocacola-desktop.mp4",
      thumbnail: "./public/cocacola-desktop-thumb.png",
    },
    mobile: {
      video: "./public/cocacola-mobile.mp4",
      thumbnail: "./public/cocacola-mobile-thumb.png",
    },
    thumbnail: "./public/cocacola-homepage.jpg",
  },
};

const gillette: PortfolioItem = {
  id: "gillette",
  title: "Gillette",
  assets: [
    {
      type: "image",
      src: assets.gillette.thumbnail,
      thumbnail: {
        src: assets.gillette.thumbnail,
        alt: "Gillette Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
    {
      type: "video",
      platform: "desktop",
      src: assets.gillette.desktop.video,
      alt: "Gillette Desktop Video",
      title: "Gillette Desktop Video",
      thumbnail: {
        src: assets.gillette.desktop.thumbnail,
        alt: "Gillette Desktop Video Thumbnail",
      },
    },
    {
      type: "video",
      platform: "mobile",
      src: assets.gillette.mobile.video,
      alt: "Gillette Mobile Video",
      title: "Gillette Mobile Video",
      thumbnail: {
        src: assets.gillette.mobile.thumbnail,
        alt: "Gillette Mobile Video Thumbnail",
      },
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};
const enterogermina: PortfolioItem = {
  id: "enterogermina",
  title: "Enterogermina",
  assets: [
    {
      type: "image",
      src: assets.enterogermina.thumbnail,
      thumbnail: {
        src: assets.enterogermina.thumbnail,
        alt: "Enterogermina Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};
const appleswitcher: PortfolioItem = {
  id: "appleswitcher",
  title: "Apple Switcher",
  assets: [
    {
      type: "image",
      src: assets.appleswitcher.thumbnail,
      thumbnail: {
        src: assets.appleswitcher.thumbnail,
        alt: "Apple Switcher Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};
const loreal: PortfolioItem = {
  id: "loreal",
  title: "L'Oreal",
  assets: [
    {
      type: "image",
      src: assets.loreal.thumbnail,
      thumbnail: {
        src: assets.loreal.thumbnail,
        alt: "L'Oreal Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};
const braunipl: PortfolioItem = {
  id: "braunipl",
  title: "Braun IPL",
  assets: [
    {
      type: "image",
      src: assets.braunipl.thumbnail,
      thumbnail: {
        src: assets.braunipl.thumbnail,
        alt: "Braun IPL Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};
const braunrazor: PortfolioItem = {
  id: "braunrazor",
  title: "Braun Razor",
  assets: [
    {
      type: "image",
      src: assets.braunrazor.thumbnail,
      thumbnail: {
        src: assets.braunrazor.thumbnail,
        alt: "Braun Razor Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};
const sheebahope: PortfolioItem = {
  id: "sheebahope",
  title: "Sheeba Hope",
  assets: [
    {
      type: "image",
      src: assets.sheebahope.thumbnail,
      thumbnail: {
        src: assets.sheebahope.thumbnail,
        alt: "Sheeba Hope Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};
const whiskas: PortfolioItem = {
  id: "whiskas",
  title: "Whiskas",
  assets: [
    {
      type: "image",
      src: assets.whiskas.thumbnail,
      thumbnail: {
        src: assets.whiskas.thumbnail,
        alt: "Whiskas Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};
const cocacola: PortfolioItem = {
  id: "cocacola",
  title: "Coca-Cola",
  assets: [
    {
      type: "image",
      src: assets.cocacola.thumbnail,
      thumbnail: {
        src: assets.cocacola.thumbnail,
        alt: "Coca-Cola Homepage Thumbnail",
      },
      alt: "Placeholder Image",
      title: "Placeholder Image",
    },
  ],
  stats: [
    { label: "Clients", value: "12" },
    { label: "Awards", value: "5" },
    { label: "Projects", value: "24" },
  ],
};

export const portfolioItems: PortfolioItem[] = [
  braunrazor,
  gillette,
  enterogermina,
  appleswitcher,
  loreal,
  braunipl,
  sheebahope,
  whiskas,
  cocacola,
];
