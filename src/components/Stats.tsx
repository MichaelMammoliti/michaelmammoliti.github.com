import styles from "./Stats.module.scss";

type StatsProps = { items: { label: string; value: string }[] };

export const Stats = ({ items }: StatsProps) => {
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
