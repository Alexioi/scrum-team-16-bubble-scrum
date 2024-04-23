import { FC } from 'react';

import { ButtonLink } from '@/components';

import style from './style.module.scss';

type Props = {
  questionText: string;
  buttonLink: string;
  buttonText: string;
};

const QuestionAboutAuth: FC<Props> = ({
  questionText,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className={style['question-about-auth']}>
      <p className={style.text}>{questionText}</p>
      <div className={style.button}>
        <ButtonLink text={buttonText} link={buttonLink} theme="outlined" />
      </div>
    </div>
  );
};

export { QuestionAboutAuth };
