import { useId } from 'react';
import Link from 'next/link';

import LogoTextSVG from '@/images/decorative/logo-text.svg';
import LogoCircleSVG from '@/images/decorative/logo-circle.svg';
import LogoLeftArcSVG from '@/images/decorative/logo-left-arc.svg';
import LogoRightArcSVG from '@/images/decorative/logo-right-arc.svg';

import { Gradient } from '../Gradient';
import style from './style.module.scss';

const Logo = () => {
  const id = useId();

  return (
    <Link href="/" className={style.logo} aria-label="go to home page">
      <Gradient id={`first${id}`} startColor="#BC9CFF" endColor="#8BA4F9" />
      <Gradient id={`second${id}`} startColor="#6FCF97" endColor="#66D2EA" />
      <svg className={(style.icon, style.icon_type_full)}>
        <g fill={`url(#first${id})`}>
          <LogoLeftArcSVG />
        </g>
        <g fill={`url(#second${id})`}>
          <LogoRightArcSVG />
        </g>
        <g fill={`url(#first${id})`}>
          <LogoCircleSVG />
        </g>
        <LogoTextSVG />
      </svg>
    </Link>
  );
};

export { Logo };
