import { useEffect } from "react";
import type { GalleryAsset } from "../types";
import styles from "./Gallery.module.scss";

type IconName = "image" | "video" | "close";

const VideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M10 16.5L16 12L10 7.5V16.5M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4Z"
    ></path>
  </svg>
);

const ImageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M21,19V5A2,2,0,0,0,19,3H5A2,2,0,0,0,3,5V19a2,2,0,0,0,2,2H19A2,2,0,0,0,21,19ZM5,5H19V19H5ZM7.5,14.5A1.5,1.5,0,1,1,9,16.5,1.5,1.5,0,0,1,7.5,14.5ZM17.8,12.8l-4.3-4.3L10.8,12l-3.3-3.3L3.2,12V6H19Z"
    ></path>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59Z"
    ></path>
  </svg>
);

const iconsMap: Record<IconName, React.FC> = {
  image: ImageIcon,
  video: VideoIcon,
  close: CloseIcon,
};

const Icon = ({ name }: { name: IconName }) => {
  const IconComponent = iconsMap[name];

  return <IconComponent />;
};

type ThumbnailProps = GalleryAsset & {
  onClick: () => void;
};

const Thumbnail = ({ thumbnail, onClick, type }: ThumbnailProps) => {
  return (
    <button className={styles.Thumbnail} onClick={onClick}>
      <img src={thumbnail.src} alt={thumbnail.alt} width="100" height="100" />
      <Icon name={type === "video" ? "video" : "image"} />
    </button>
  );
};

const blockScroll = () => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
};

export const Gallery = ({
  assets,
  activeAssetIndex,
  onClose,
  onChange,
}: {
  assets: GalleryAsset[];
  activeAssetIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
}) => {
  const asset = assets[activeAssetIndex];

  useEffect(() => {
    return blockScroll();
  }, []);

  console.log(assets);

  return (
    <div className={styles.Gallery}>
      <div className={styles.GalleryWrapper}>
        <div className={styles.GalleryContent}>
          {asset.type === "video" ? (
            <video controls key={asset.src}>
              <source src={asset.src} type="video/mp4" />
            </video>
          ) : (
            <img src={asset.src} alt={asset.alt} key={asset.src} />
          )}
        </div>
        <div className={styles.GalleryDetails}>
          <div className={styles.GalleryHeader}>
            <h2>{asset.title}</h2>
            <button onClick={onClose} className={styles.GalleryClose}>
              <span className="visually-hidden">Close</span>
              <Icon name="close" />
            </button>
          </div>

          <ul className={styles.GalleryThumbnails}>
            {assets.map((asset, index) => (
              <li key={index} className={styles.GalleryItem}>
                <Thumbnail {...asset} onClick={() => onChange(index)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
