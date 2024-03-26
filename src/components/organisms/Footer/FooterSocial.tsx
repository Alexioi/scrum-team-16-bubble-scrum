import Link from 'next/link';

import { Gradient } from '@/components/atoms';

import FacebookIcon from '@/images/decorative/facebook.svg';
import TwitterIcon from '@/images/decorative/twitter.svg';
import InstagramIcon from '@/images/decorative/instagram.svg';

import style from './style.module.scss';

const FooterSocial = () => {
  return (
    <ul className={style.down__links}>
      <li>
        <Link href="/#" className={style.down__link}>
          <svg className={style.down__icon} fill="url(#twitter)">
            <Gradient startColor="#BC9CFF" endColor="#8BA4F9" id="twitter" />
            <TwitterIcon />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/#" className={style.down__link}>
          <svg className={style.down__icon} fill="url(#facebook)">
            <Gradient startColor="#BC9CFF" endColor="#8BA4F9" id="facebook" />
            <FacebookIcon />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/#" className={style.down__link}>
          <svg className={style.down__icon} fill="url(#instagram)">
            <Gradient startColor="#BC9CFF" endColor="#8BA4F9" id="instagram" />
            <InstagramIcon />
          </svg>
        </Link>
      </li>
    </ul>
  );
};

export { FooterSocial };
