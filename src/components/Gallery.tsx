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
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.1923 0.29287C10.5828 -0.0976388 11.2158 -0.0976078 11.6063 0.29287C11.9969 0.683394 11.9969 1.31641 11.6063 1.70693L7.36318 5.94912L11.6063 10.1923C11.9968 10.5828 11.9968 11.2158 11.6063 11.6063C11.2158 11.9969 10.5828 11.9969 10.1923 11.6063L5.94912 7.36318L1.70693 11.6063C1.31641 11.9969 0.683394 11.9969 0.29287 11.6063C-0.0976081 11.2158 -0.0976387 10.5828 0.29287 10.1923L4.53506 5.94912L0.29287 1.70693C-0.0975786 1.3164 -0.0976289 0.683369 0.29287 0.29287C0.683376 -0.0975539 1.31643 -0.097554 1.70693 0.29287L5.94912 4.53506L10.1923 0.29287Z" />
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.Gallery}>
      <div className={styles.GalleryWrapper}>
        <div className={styles.GalleryContent}>
          {asset.type === "video" ? (
            <video controls autoPlay muted key={asset.src}>
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
