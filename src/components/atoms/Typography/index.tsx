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
    p: <p className={styles.p}>{children}</p>,
    h1: <h1 className={styles.h1}>{children}</h1>,
    h2: <h2 className={styles.h2}>{children}</h2>,
    h3: <h3 className={styles.h3}>{children}</h3>,
    span: <span className={styles.span}>{children}</span>,
  }[tag];
};

export { Typography };
