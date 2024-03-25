import { useId } from 'react';

import LogoTextSVG from '@/images/decorative/logo-text.svg';

import { Gradient } from '../Gradient';
import style from './style.module.scss';

const Logo = () => {
  const id = useId();

  return (
    <a href="/" className={style.logo} aria-label="go to home page">
      <Gradient id={`first${id}`} startColor="#BC9CFF" endColor="#8BA4F9" />
      <Gradient id={`second${id}`} startColor="#6FCF97" endColor="#66D2EA" />

      <svg className={(style.icon, style.icon_type_full)}>
        <path
          d="M20.0003 27.0587C19.3533 27.0587 18.8239 26.5292 18.8239 25.8822C18.8239 21.3528 15.118 17.6469 10.5886 17.6469C9.94152 17.6469 9.41211 17.1175 9.41211 16.4704C9.41211 15.8234 9.94152 15.2939 10.5886 15.2939C16.4415 15.2939 21.1768 20.0292 21.1768 25.8822C21.1768 26.5292 20.6474 27.0587 20.0003 27.0587Z"
          fill={`url(#first${id})`}
        />
        <path
          d="M30.5884 16.4704C30.5884 17.1175 30.0589 17.6469
          29.4119 17.6469C26.6178 17.6469 24.1178 19.0587 22.6472
          21.2057C22.3236 20.3822 21.9413 19.6175 21.4707 18.9116C23.4119
          16.6763 26.2648 15.2939 29.4119 15.2939C30.0589 15.2939 30.5884
          15.8234 30.5884 16.4704Z"
          fill={`url(#second${id})`}
        />
        <path
          d="M20 40C8.97059 40 0 31.0294 0 20C0 8.97059 8.97059 0 20
          0C31.0294 0 40 8.97059 40 20C40 31.0294 31.0294 40 20 40ZM20
          2.35294C10.2647 2.35294 2.35294 10.2647 2.35294 20C2.35294 29.7353
          10.2647 37.6471 20 37.6471C29.7353 37.6471 37.6471 29.7353 37.6471
          20C37.6471 10.2647 29.7353 2.35294 20 2.35294Z"
          fill={`url(#first${id})`}
        />
        <LogoTextSVG />
      </svg>
    </a>
  );
};

export { Logo };
