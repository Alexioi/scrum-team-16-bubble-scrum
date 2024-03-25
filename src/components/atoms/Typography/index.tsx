'use client';

import { CSSProperties, ReactNode } from 'react';
import styles from './style.module.scss';

type TagVariants = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface Props {
  children: ReactNode;
  tag?: TagVariants;
  style?: CSSProperties | undefined;
}

const Typography: React.FC<Props> = ({ children, tag = 'p', style }) => {
  return {
    p: (
      <p style={style} className={styles.typography__p}>
        {children}
      </p>
    ),
    h1: (
      <h1 style={style} className={styles.typography__h1}>
        {children}
      </h1>
    ),
    h2: (
      <h2 style={style} className={styles.typography__h2}>
        {children}
      </h2>
    ),
    h3: (
      <h3 style={style} className={styles.typography__h3}>
        {children}
      </h3>
    ),
    span: (
      <span style={style} className={styles.typography}>
        {children}
      </span>
    ),
  }[tag];
};

export { Typography };
