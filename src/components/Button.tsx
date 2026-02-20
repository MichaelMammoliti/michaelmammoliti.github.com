import styles from "./Button.module.scss";

import { Icon, type IconName } from "./Icon";

export const Anchor = (
  props: {
    icon?: IconName;
    href: string;
    label?: string;
    children?: React.ReactNode;
    text?: string;
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>,
) => {
  const { icon, children, label, text, ...rest } = props;

  return (
    <a
      className={styles.Anchor}
      target={props.target}
      rel="noopener noreferrer"
      {...rest}
    >
      {icon && <Icon name={icon} />}
      {label && <span className="visually-hidden">{label}</span>}
      {text && <span>{text}</span>}
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
    text?: string;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { icon, children, label, text, ...rest } = props;

  return (
    <button className={styles.Button} {...rest}>
      {icon && <Icon name={icon} />}
      {label && <span className="visually-hidden">{label}</span>}
      {text && <span>{text}</span>}
      {children}
    </button>
  );
};
