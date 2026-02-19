export type GalleryAsset = {
  type: "image" | "video";
  src: string;
  alt: string;
  platform?: "desktop" | "mobile";
  thumbnail: {
    src: string;
    alt: string;
  };
  title: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  brand: string;
  assets: GalleryAsset[];
  stats: { label: string; value: string }[];
};
