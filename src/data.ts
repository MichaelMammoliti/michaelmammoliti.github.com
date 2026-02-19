import type { PortfolioItem } from "./types";

export const menuItems = ["Home", "Portfolio", "Contacts", "About"];

const githubUrl = "michaelmammoliti.github.io";
const githubBranch = "main";
const githubBaseUrl = `https://raw.githubusercontent.com/${githubUrl}/${githubBranch}/public`;
const getAsset = (src: string) => {
  if (import.meta.env.DEV) {
    return `/${src}`;
  }

  return `/${src}`;
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
  title: "Exfoliating Bar Razor",
  brand: "Gillette Labs",
  assets: [
    {
      type: "image",
      src: assets.gillette.thumbnail,
      thumbnail: {
        src: assets.gillette.thumbnail,
        alt: "Gillette Homepage Thumbnail",
      },
      alt: "Exfoliating Bar Razor Homepage",
      title: "Exfoliating Bar Razor Homepage",
    },
    {
      type: "video",
      platform: "desktop",
      src: assets.gillette.desktop.video,
      alt: "Exfoliating Bar Razor Desktop Video",
      title: "Exfoliating Bar Razor Desktop Video",
      thumbnail: {
        src: assets.gillette.desktop.thumbnail,
        alt: "Exfoliating Bar Razor Desktop Video Thumbnail",
      },
    },
    {
      type: "video",
      platform: "mobile",
      src: assets.gillette.mobile.video,
      alt: "Exfoliating Bar Razor Mobile Video",
      title: "Exfoliating Bar Razor Mobile Video",
      thumbnail: {
        src: assets.gillette.mobile.thumbnail,
        alt: "Exfoliating Bar Razor Mobile Video Thumbnail",
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
  title: "Enterogermina Benessere Intestinale",
  brand: "Sanofi",
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
  title: "Switch to iPhone",
  brand: "Apple",
  assets: [
    {
      type: "image",
      src: assets.appleswitcher.thumbnail,
      thumbnail: {
        src: assets.appleswitcher.thumbnail,
        alt: "Apple Switcher Homepage Thumbnail",
      },
      alt: "Switch to iPhone Homepage",
      title: "Switch to iPhone Homepage",
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
  title: "Le Défilé - Walk Your Worth",
  brand: "L'Oreal",
  assets: [
    {
      type: "image",
      src: assets.loreal.thumbnail,
      thumbnail: {
        src: assets.loreal.thumbnail,
        alt: "L'Oreal Homepage Thumbnail",
      },
      alt: "L'Oreal Homepage",
      title: "L'Oreal Homepage",
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
  title: "Skin i·expert Smart IPL",
  brand: "Braun",
  assets: [
    {
      type: "image",
      src: assets.braunipl.thumbnail,
      thumbnail: {
        src: assets.braunipl.thumbnail,
        alt: "Braun IPL Homepage Thumbnail",
      },
      alt: "Braun Skin i·expert Smart IPL Homepage",
      title: "Braun Skin i·expert Smart IPL Homepage",
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
  title: "Series 9 Pro+ Shaver",
  brand: "Braun",
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
    {
      type: "video",
      src: assets.braunrazor.desktop.video,
      thumbnail: {
        src: assets.braunrazor.desktop.thumbnail,
        alt: "Braun Series 9 Pro+",
      },
      alt: "Braun Series 9 Pro+",
      title: "Braun Series 9 Pro+",
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
  title: "Restore Reef: Hope Grows",
  brand: "Sheeba",
  assets: [
    {
      type: "image",
      src: assets.sheebahope.thumbnail,
      thumbnail: {
        src: assets.sheebahope.thumbnail,
        alt: "Sheeba Hope Homepage Thumbnail",
      },
      alt: "Restore Reef: Hope Grows Homepage",
      title: "Restore Reef: Hope Grows Homepage",
    },
    {
      type: "video",
      src: getAsset("sheebahope-desktop.mp4"),
      thumbnail: {
        src: assets.sheebahope.thumbnail,
        alt: "Restore Reef: Hope Grows Homepage Thumbnail",
      },
      alt: "Restore Reef: Hope Grows Desktop",
      title: "Restore Reef: Hope Grows Desktop",
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
  title: "Purrsonality",
  brand: "Whiskas",
  assets: [
    {
      type: "image",
      src: assets.whiskas.thumbnail,
      thumbnail: {
        src: assets.whiskas.thumbnail,
        alt: "Whiskas Homepage Thumbnail",
      },
      alt: "Purrsonality Homepage",
      title: "Purrsonality Homepage",
    },
    {
      type: "video",
      src: getAsset("whiskas-desktop.mp4"),
      thumbnail: {
        src: assets.whiskas.thumbnail,
        alt: "Whiskas Desktop Thumbnail",
      },
      alt: "Whiskas Desktop",
      title: "Whiskas Desktop",
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
  title: "Secret Santa: Gift Cards",
  brand: "Coca-Cola",
  assets: [
    {
      type: "image",
      src: assets.cocacola.thumbnail,
      thumbnail: {
        src: assets.cocacola.thumbnail,
        alt: "Coca-Cola Homepage Thumbnail",
      },
      alt: "Secret Santa: Gift Cards Homepage",
      title: "Secret Santa: Gift Cards Homepage",
    },
    {
      type: "image",
      src: getAsset("cocacola-2.jpg"),
      thumbnail: {
        src: getAsset("cocacola-2.jpg"),
        alt: "Secret Santa: Gift Cards Second Image Thumbnail",
      },
      alt: "Secret Santa: Gift Cards Second Image",
      title: "Secret Santa: Gift Cards Second Image",
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
  whiskas,
  braunipl,
  appleswitcher,
  cocacola,
  loreal,
  sheebahope,
  enterogermina,
];
