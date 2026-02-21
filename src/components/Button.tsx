import styles from "./Button.module.scss";

import { Icon, type IconName } from "./Icon";

export const Anchor = (
  props: {
    icon?: IconName;
    href: string;
    label?: string;
    children?: React.ReactNode;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  const { icon, children, label, ...rest } = props;

  return (
    <a
      className={styles.Anchor}
      target={props.target}
      rel="noopener noreferrer"
      data-icon={icon ? "true" : undefined}
      {...rest}
    >
      {icon && <Icon name={icon} />}
      {label && <span className="visually-hidden">{label}</span>}
      {children}
    </a>
  );
};

export const Button = (
  props: {
    icon?: IconName;
    label?: string;
    children?: React.ReactNode;
    onClick?: () => void;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { icon, children, label, ...rest } = props;

  return (
    <button
      className={styles.Button}
      data-icon={icon ? "true" : undefined}
      {...rest}
    >
      {icon && <Icon name={icon} />}
      {label && <span className="visually-hidden">{label}</span>}
      {children}
    </button>
  );
};
