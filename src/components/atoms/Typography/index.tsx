'use client';

import { ReactNode } from 'react';
import styles from './style.module.scss';

type TagVariants = 'h1' | 'h2' | 'h3' | 'p' | 'span';

type Props = {
  children: ReactNode;
  tag: TagVariants;
};

const Typography: React.FC<Props> = ({ children, tag }) => {
  return {
    p: <p className={styles.typography__p}>{children}</p>,
    h1: <h1 className={styles.typography__h1}>{children}</h1>,
    h2: <h2 className={styles.typography__h2}>{children}</h2>,
    h3: <h3 className={styles.typography__h3}>{children}</h3>,
    span: <span className={styles.typography}>{children}</span>,
  }[tag];
};

export { Typography };
