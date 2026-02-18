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
};

export const portfolioItems: PortfolioItem[] = [
  {
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
  },
  {
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
      {
        type: "video",
        platform: "desktop",
        src: assets.enterogermina.desktop.video,
        alt: "Enterogermina Desktop Video",
        title: "Enterogermina Desktop Video",
        thumbnail: {
          src: assets.enterogermina.desktop.thumbnail,
          alt: "Enterogermina Desktop Video Thumbnail",
        },
      },
      {
        type: "video",
        platform: "mobile",
        src: assets.enterogermina.mobile.video,
        alt: "Enterogermina Mobile Video",
        title: "Enterogermina Mobile Video",
        thumbnail: {
          src: assets.enterogermina.mobile.thumbnail,
          alt: "Enterogermina Mobile Video Thumbnail",
        },
      },
    ],
    stats: [
      { label: "Clients", value: "12" },
      { label: "Awards", value: "5" },
      { label: "Projects", value: "24" },
    ],
  },
  {
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
      {
        type: "video",
        platform: "desktop",
        src: assets.appleswitcher.desktop.video,
        alt: "Apple Switcher Desktop Video",
        title: "Apple Switcher Desktop Video",
        thumbnail: {
          src: assets.appleswitcher.desktop.thumbnail,
          alt: "Apple Switcher Desktop Video Thumbnail",
        },
      },
      {
        type: "video",
        platform: "mobile",
        src: assets.appleswitcher.mobile.video,
        alt: "Apple Switcher Mobile Video",
        title: "Apple Switcher Mobile Video",
        thumbnail: {
          src: assets.appleswitcher.mobile.thumbnail,
          alt: "Apple Switcher Mobile Video Thumbnail",
        },
      },
    ],
    stats: [
      { label: "Clients", value: "12" },
      { label: "Awards", value: "5" },
      { label: "Projects", value: "24" },
    ],
  },
  {
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
      {
        type: "video",
        platform: "desktop",
        src: assets.loreal.desktop.video,
        alt: "L'Oreal Desktop Video",
        title: "L'Oreal Desktop Video",
        thumbnail: {
          src: assets.loreal.desktop.thumbnail,
          alt: "L'Oreal Desktop Video Thumbnail",
        },
      },
      {
        type: "video",
        platform: "mobile",
        src: assets.loreal.mobile.video,
        alt: "L'Oreal Mobile Video",
        title: "L'Oreal Mobile Video",
        thumbnail: {
          src: assets.loreal.mobile.thumbnail,
          alt: "L'Oreal Mobile Video Thumbnail",
        },
      },
    ],
    stats: [
      { label: "Clients", value: "12" },
      { label: "Awards", value: "5" },
      { label: "Projects", value: "24" },
    ],
  },
  {
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
      {
        type: "video",
        platform: "desktop",
        src: assets.braunipl.desktop.video,
        alt: "Braun IPL Desktop Video",
        title: "Braun IPL Desktop Video",
        thumbnail: {
          src: assets.braunipl.desktop.thumbnail,
          alt: "Braun IPL Desktop Video Thumbnail",
        },
      },
      {
        type: "video",
        platform: "mobile",
        src: assets.braunipl.mobile.video,
        alt: "Braun IPL Mobile Video",
        title: "Braun IPL Mobile Video",
        thumbnail: {
          src: assets.braunipl.mobile.thumbnail,
          alt: "Braun IPL Mobile Video Thumbnail",
        },
      },
    ],
    stats: [
      { label: "Clients", value: "12" },
      { label: "Awards", value: "5" },
      { label: "Projects", value: "24" },
    ],
  },
  {
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
      {
        type: "video",
        platform: "desktop",
        src: assets.braunrazor.desktop.video,
        alt: "Braun Razor Desktop Video",
        title: "Braun Razor Desktop Video",
        thumbnail: {
          src: assets.braunrazor.desktop.thumbnail,
          alt: "Braun Razor Desktop Video Thumbnail",
        },
      },
      {
        type: "video",
        platform: "mobile",
        src: assets.braunrazor.mobile.video,
        alt: "Braun Razor Mobile Video",
        title: "Braun Razor Mobile Video",
        thumbnail: {
          src: assets.braunrazor.mobile.thumbnail,
          alt: "Braun Razor Mobile Video Thumbnail",
        },
      },
    ],
    stats: [
      { label: "Clients", value: "12" },
      { label: "Awards", value: "5" },
      { label: "Projects", value: "24" },
    ],
  },
  {
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
      {
        type: "video",
        platform: "desktop",
        src: assets.sheebahope.desktop.video,
        alt: "Sheeba Hope Desktop Video",
        title: "Sheeba Hope Desktop Video",
        thumbnail: {
          src: assets.sheebahope.desktop.thumbnail,
          alt: "Sheeba Hope Desktop Video Thumbnail",
        },
      },
      {
        type: "video",
        platform: "mobile",
        src: assets.sheebahope.mobile.video,
        alt: "Sheeba Hope Mobile Video",
        title: "Sheeba Hope Mobile Video",
        thumbnail: {
          src: assets.sheebahope.mobile.thumbnail,
          alt: "Sheeba Hope Mobile Video Thumbnail",
        },
      },
    ],
    stats: [
      { label: "Clients", value: "12" },
      { label: "Awards", value: "5" },
      { label: "Projects", value: "24" },
    ],
  },
  {
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
      {
        type: "video",
        platform: "desktop",
        src: assets.whiskas.desktop.video,
        alt: "Whiskas Desktop Video",
        title: "Whiskas Desktop Video",
        thumbnail: {
          src: assets.whiskas.desktop.thumbnail,
          alt: "Whiskas Desktop Video Thumbnail",
        },
      },
      {
        type: "video",
        platform: "mobile",
        src: assets.whiskas.mobile.video,
        alt: "Whiskas Mobile Video",
        title: "Whiskas Mobile Video",
        thumbnail: {
          src: assets.whiskas.mobile.thumbnail,
          alt: "Whiskas Mobile Video Thumbnail",
        },
      },
    ],
    stats: [
      { label: "Clients", value: "12" },
      { label: "Awards", value: "5" },
      { label: "Projects", value: "24" },
    ],
  },
];
