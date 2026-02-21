import { useEffect } from "react";
import type { GalleryAsset } from "../types";
import styles from "./Gallery.module.scss";
import { Icon } from "./Icon";

type ThumbnailProps = GalleryAsset & {
  onClick: () => void;
  current: boolean;
};

const Thumbnail = ({ thumbnail, onClick, type, current }: ThumbnailProps) => {
  return (
    <button
      className={styles.Thumbnail}
      onClick={onClick}
      data-current={current}
    >
      <img src={thumbnail.src} alt={thumbnail.alt} width="100" height="100" />
      {/* <Icon name={type === "video" ? "Video" : "Image"} /> */}
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
      <button onClick={onClose} className={styles.GalleryClose}>
        <span className="visually-hidden">Close</span>
        <Icon name="Close" />
      </button>

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
          <ul className={styles.GalleryThumbnails}>
            {assets.map((asset, index) => (
              <li key={index} className={styles.GalleryItem}>
                <Thumbnail
                  {...asset}
                  onClick={() => onChange(index)}
                  current={index === activeAssetIndex}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
