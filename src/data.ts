import type { PortfolioItem } from "./types";

export const menuItems = ["Home", "Portfolio", "Contacts", "About"];

const githubUrl = "michaelmammoliti.github.io";
const githubBranch = "main";
const githubBaseUrl = `https://raw.githubusercontent.com/${githubUrl}/${githubBranch}/public`;
const getAsset = (src: string) => {
  return `${githubBaseUrl}/${src}`;
};

const assets = {
  gillette: {
    desktop: {
      video: getAsset("gillette-desktop.mp4"),
      thumbnail: getAsset("gillette-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("gillette-mobile.mp4"),
      thumbnail: getAsset("gillette-mobile-thumb.png"),
    },
    thumbnail: getAsset("gillette-homepage.jpg"),
  },
  enterogermina: {
    desktop: {
      video: getAsset("enterogermina-desktop.mp4"),
      thumbnail: getAsset("enterogermina-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("enterogermina-mobile.mp4"),
      thumbnail: getAsset("enterogermina-mobile-thumb.png"),
    },
    thumbnail: getAsset("enterogermina-homepage.jpg"),
  },
  appleswitcher: {
    desktop: {
      video: getAsset("appleswitcher-desktop.mp4"),
      thumbnail: getAsset("appleswitcher-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("appleswitcher-mobile.mp4"),
      thumbnail: getAsset("appleswitcher-mobile-thumb.png"),
    },
    thumbnail: getAsset("appleswitcher-homepage.jpg"),
  },
  loreal: {
    desktop: {
      video: getAsset("loreal-desktop.mp4"),
      thumbnail: getAsset("loreal-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("loreal-mobile.mp4"),
      thumbnail: getAsset("loreal-mobile-thumb.png"),
    },
    thumbnail: getAsset("loreal-homepage.jpg"),
  },
  braunipl: {
    desktop: {
      video: getAsset("braunipl-desktop.mp4"),
      thumbnail: getAsset("braunipl-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("braunipl-mobile.mp4"),
      thumbnail: getAsset("braunipl-mobile-thumb.png"),
    },
    thumbnail: getAsset("braunipl-homepage.jpg"),
  },
  braunrazor: {
    desktop: {
      video: getAsset("braunrazor-desktop.mp4"),
      thumbnail: getAsset("braunrazor-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("braunrazor-mobile.mp4"),
      thumbnail: getAsset("braunrazor-mobile-thumb.png"),
    },
    thumbnail: getAsset("braunrazor-homepage.jpg"),
  },
  sheebahope: {
    desktop: {
      video: getAsset("sheebahope-desktop.mp4"),
      thumbnail: getAsset("sheebahope-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("sheebahope-mobile.mp4"),
      thumbnail: getAsset("sheebahope-mobile-thumb.png"),
    },
    thumbnail: getAsset("sheebahope-homepage.jpg"),
  },
  whiskas: {
    desktop: {
      video: getAsset("whiskas-desktop.mp4"),
      thumbnail: getAsset("whiskas-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("whiskas-mobile.mp4"),
      thumbnail: getAsset("whiskas-mobile-thumb.png"),
    },
    thumbnail: getAsset("whiskas-homepage.jpg"),
  },
  cocacola: {
    desktop: {
      video: getAsset("cocacola-desktop.mp4"),
      thumbnail: getAsset("cocacola-desktop-thumb.png"),
    },
    mobile: {
      video: getAsset("cocacola-mobile.mp4"),
      thumbnail: getAsset("cocacola-mobile-thumb.png"),
    },
    thumbnail: getAsset("cocacola-homepage.jpg"),
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
