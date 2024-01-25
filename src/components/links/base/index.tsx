import type {ComponentChildren, VNode} from 'preact';
import useAnimations from './hooks/useAnimations';
import styles from './styles.module.css';

interface Props {
  id: string;
  href: string;
  target?: string;
  removeTopMargin?: boolean;
  children: ComponentChildren;
  icon?: VNode<ComponentChildren>;
}

export const BaseLink = (props: Props) => {
  const topMargin = props.removeTopMargin ? styles.removeTopMargin : '';
  useAnimations(props.id);

  return (
    <a
      id={props.id}
      class={`${styles.link} ${topMargin}`}
      href={props.href}
      target={props.target ?? '_self'}>
      <div class={styles.border} />
      <div class={styles.content}>
        <span>{props.children}</span>
        {props.icon ?? (
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              fill="#F77FBD"
              d="M3.75 15.75C3.3375 15.75 2.98438 15.6031 2.69063 15.3094C2.39688 15.0156 2.25 14.6625 2.25 14.25V3.75C2.25 3.3375 2.39688 2.98438 2.69063 2.69063C2.98438 2.39688 3.3375 2.25 3.75 2.25H9V3.75H3.75V14.25H14.25V9H15.75V14.25C15.75 14.6625 15.6031 15.0156 15.3094 15.3094C15.0156 15.6031 14.6625 15.75 14.25 15.75H3.75ZM7.275 11.775L6.225 10.725L13.2 3.75H10.5V2.25H15.75V7.5H14.25V4.8L7.275 11.775Z"
            />
          </svg>
        )}
      </div>
    </a>
  );
};

export default BaseLink;
