import { useEffect, useRef, useState } from "react";
import { portfolioItems } from "../data";
import type { GalleryAsset, PortfolioItem } from "../types";
import styles from "./FullScreenHero.module.scss";
import { Gallery } from "./Gallery";
import { Icon } from "./Icon";

type VerticalNavigationProps = {
  items: string[];
  onClick: (index: number) => void;
  activeItemIndex: number;
};

const VerticalNavigation = ({
  items,
  activeItemIndex,
  onClick,
}: VerticalNavigationProps) => {
  return (
    <div className={styles.VerticalNavigation}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button
              aria-current={activeItemIndex === index ? "step" : undefined}
              onClick={() => onClick(index)}
            >
              <span>{item}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

type StatsProps = { items: { label: string; value: string }[] };

const Stats = ({ items }: StatsProps) => {
  return (
    <div className={styles.Stats}>
      <ul>
        {items.map((stat, index) => (
          <li key={index}>
            <div className={styles.StatsItem}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

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

  const newAssets = assets.slice(1);

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

        {/* <div className={styles.PortfolioItemThumbnails}>
          <Thumbnails items={newAssets} onClick={onThumbnailClick} />
        </div>

        <div className={styles.PortfolioItemStats}>
          <Stats items={stats} />
        </div> */}

        <div className={styles.PortfolioItemDiscoverMore}>
          <button onClick={handleDiscoverMoreClick}>Discover More</button>
        </div>
      </div>
    </div>
  );
};

const scrollToElement = (selector: string) => {
  const element = document.querySelector(selector);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export const FullScreenHero = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeAssetIndex, setActiveAssetIndex] = useState<number | undefined>(
    undefined,
  );

  const listRef = useRef<HTMLUListElement>(null);

  // delta = 1 === scrolling to the right, we want to scroll to the next item
  // delta = -1 === scrolling to the left, we want to scroll to the previous item
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

  return (
    <div id="portfolio">
      <section className={styles.Hero}>
        <VerticalNavigation
          items={portfolioItems.map((item) => item.title)}
          activeItemIndex={activeItemIndex}
          onClick={(index) => {
            setActiveItemIndex(index);
          }}
        />

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
              <li
                key={item.id}
                id={`portfolio-item-${index}`}
                style={{ zIndex: portfolioItems.length - index }}
              >
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
            assets={portfolioItems[activeItemIndex].assets.slice(1)}
            activeAssetIndex={activeAssetIndex}
            onClose={() => setActiveAssetIndex(undefined)}
            onChange={(index) => setActiveAssetIndex(index)}
          />
        )}
      </section>
    </div>
  );
};
