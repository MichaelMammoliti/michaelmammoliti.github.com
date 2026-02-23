import styles from "./VerticalNavigation.module.scss";

type VerticalNavigationProps = {
  items: string[];
  onClick: (index: number) => void;
  activeItemIndex: number;
};

export const VerticalNavigation = ({
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
