import { useEffect, useRef, useState } from "react";
import { portfolioItems } from "../data";
import type { PortfolioItem } from "../types";
import { Button } from "./Button";
import { Gallery } from "./Gallery";
import { Icon } from "./Icon";

import styles from "./Portfolio.module.scss";

type PortfolioItemProps = PortfolioItem & {
  onThumbnailClick: (index: number) => void;
  index: number;
};

const PortfolioItem = ({
  assets,
  stats,
  title,
  brand,
  index,
  onThumbnailClick,
}: PortfolioItemProps) => {
  const elRef = useRef<HTMLDivElement>(null);
  const asset = assets[0];

  const isVideo = asset.type === "video";

  useEffect(() => {
    // observe when the element is in the viewport and play the video if it is
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isVideo) {
            return;
          }

          const video = elRef.current?.querySelector("video");

          if (entry.isIntersecting) {
            video?.play();
          } else {
            video?.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    if (elRef.current) {
      observer.observe(elRef.current);
    }

    return () => {
      if (elRef.current) {
        observer.unobserve(elRef.current);
      }
    };
  }, [isVideo]);

  const handleDiscoverMoreClick = () => {
    onThumbnailClick(0);
  };

  return (
    <div className={styles.PortfolioItem} ref={elRef}>
      <div
        className={styles.PortfolioItemBackground}
        style={{ backgroundImage: `url(${asset.src})` }}
      />

      <div className={styles.PortfolioItemOverlay} />

      <div className={styles.PortfolioItemDevice} data-type="desktop">
        {asset.type === "video" ? (
          <video muted loop>
            <source src={asset.src} type="video/mp4" />
          </video>
        ) : (
          <img src={asset.src} alt={asset.alt} />
        )}
      </div>

      <div className={styles.PortfolioItemOverlay} />

      <div className={styles.PortfolioItemDetails}>
        <div className={styles.PortfolioItemTexts}>
          <span className={styles.PortfolioItemNumber}>
            {`${index + 1}`.padStart(2, "0")}
          </span>
          <span className={styles.PortfolioItemBrand}>{brand}</span>
          <h2 className={styles.PortfolioItemTitle}>{title}</h2>
        </div>

        <div className={styles.PortfolioItemDiscoverMore}>
          <Button onClick={handleDiscoverMoreClick}>Discover More</Button>
        </div>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeAssetIndex, setActiveAssetIndex] = useState<number | undefined>(
    undefined,
  );

  const listRef = useRef<HTMLUListElement>(null);

  const scrollList = (delta: number) => {
    const list = listRef.current;
    const listItem = list?.querySelector("li");

    if (!list || !listItem) {
      return;
    }

    const scrolledListItemPercentage =
      (list.scrollLeft % listItem.clientWidth) / listItem.clientWidth;

    let left = 0;

    const w = listItem.clientWidth;

    if (delta === 1) {
      if (scrolledListItemPercentage <= 0.7) {
        left = w * (1 - scrolledListItemPercentage);
      } else {
        left = w * (1 - scrolledListItemPercentage) + w;
      }
    } else {
      if (scrolledListItemPercentage >= 0.3) {
        left = -w * scrolledListItemPercentage;
      } else {
        left = -w * scrolledListItemPercentage - w;
      }
    }

    list.scrollBy({
      left,
      behavior: "smooth",
    });
  };

  const handleLeftClick = () => {
    scrollList(-1);
  };

  const handleRightClick = () => {
    scrollList(1);
  };

  const portfolioAssets = portfolioItems[activeItemIndex].assets;

  const galleryAssets =
    portfolioAssets.length === 1 ? portfolioAssets : portfolioAssets.slice(1);

  return (
    <div id="portfolio" className={styles.PortfolioRoot}>
      <div className={styles.PortfolioControls}>
        <button onClick={handleLeftClick}>
          <Icon name="ArrowLeft" />
          <span className="visually-hidden">PREVIOUS</span>
        </button>
        <button onClick={handleRightClick}>
          <Icon name="ArrowRight" />
          <span className="visually-hidden">NEXT</span>
        </button>
      </div>

      <div className={styles.Portfolio}>
        <ul ref={listRef}>
          {portfolioItems.map((item, index) => (
            <li key={item.id}>
              <PortfolioItem
                {...item}
                index={index}
                onThumbnailClick={(thumbnailIndex) => {
                  setActiveItemIndex(index);
                  setActiveAssetIndex(thumbnailIndex);
                }}
              />
            </li>
          ))}
        </ul>
      </div>

      {typeof activeAssetIndex === "number" && (
        <Gallery
          assets={galleryAssets}
          activeAssetIndex={activeAssetIndex}
          onClose={() => setActiveAssetIndex(undefined)}
          onChange={(index) => setActiveAssetIndex(index)}
        />
      )}
    </div>
  );
};
