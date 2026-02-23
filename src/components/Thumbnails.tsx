import styles from "./Thumbnails.module.scss";

import type { GalleryAsset } from "../types";

type ThumbnailsProps = {
  items: GalleryAsset[];
  onClick: (index: number) => void;
};

const Thumbnails = ({ items, onClick }: ThumbnailsProps) => {
  return (
    <div className={styles.Thumbnails}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button onClick={() => onClick(index)}>
              <img
                src={item.thumbnail.src}
                alt={item.thumbnail.alt}
                className={styles.thumb}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
