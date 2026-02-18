import { useEffect, useRef, useState } from "react";
import { portfolioItems } from "../data";
import type { GalleryAsset, PortfolioItem } from "../types";
import styles from "./FullScreenHero.module.scss";
import { Gallery } from "./Gallery";

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
              <p>{stat.label}</p>
              <span>{stat.value}</span>
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
};

const PortfolioItem = ({
  assets,
  stats,
  title,
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

  return (
    <div className={styles.PortfolioItem} ref={elRef}>
      {asset.type === "video" ? (
        <video muted loop>
          <source src={asset.src} type="video/mp4" />
        </video>
      ) : (
        <img src={asset.src} alt={asset.alt} />
      )}
      <div className={styles.PortfolioItemOverlay} />
      <div className={styles.PortfolioItemContent}>
        <div>
          <h2>{title}</h2>
          <Stats items={stats} />
          {!!newAssets.length && (
            <Thumbnails items={newAssets} onClick={onThumbnailClick} />
          )}
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

  useEffect(() => {
    scrollToElement(`#portfolio-item-${activeItemIndex}`);
  }, [activeItemIndex]);

  return (
    <div>
      <section className={styles.Hero}>
        <VerticalNavigation
          items={portfolioItems.map((item) => item.title)}
          activeItemIndex={activeItemIndex}
          onClick={(index) => {
            setActiveItemIndex(index);
          }}
        />

        <div className={styles.Portfolio}>
          <ul>
            {portfolioItems.map((item, index) => (
              <li key={item.id} id={`portfolio-item-${index}`}>
                <PortfolioItem
                  {...item}
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
