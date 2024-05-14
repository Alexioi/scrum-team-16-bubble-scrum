'use client';

import { ChangeEvent, FC, useId, useState, useEffect } from 'react';
import Image from 'next/image';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

import { Gradient } from '@/components';
import { changeAvatar, storage, getImageURL } from '@/api';
import { useAppDispatch } from '@/hooks';
import { authActions } from '@/store';
import UploadSVG from '@/images/decorative/upload.svg';

import style from './style.module.scss';

const AVATAR_FILE_TYPES = ['jpg', 'png'];
const AVATAR_MAX_SIZE = 1000000;
const AVATAR_TYPE_ERROR = 'Загрузите сюда файлы формата JPG или PNG';
const AVATAR_SIZE_ERROR = `Максимальный размер файла ${AVATAR_MAX_SIZE * 1e-6} Мбайт`;

type Props = {
  userId: string;
  userAvatarUrl: string;
};

const AvatarUpload: FC<Props> = ({ userId, userAvatarUrl }) => {
  const dispatch = useAppDispatch();
  const gradientId = useId();
  const [avatarError, setAvatarError] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleAvatarFileInputChange = async (
    evt: ChangeEvent<HTMLInputElement>,
  ) => {
    const file = evt.currentTarget.files && evt.currentTarget.files[0];
    const fileName = file ? file.name.toLowerCase() : '';
    const fileTypeMatches = AVATAR_FILE_TYPES.some((fileType) =>
      fileName.endsWith(fileType),
    );
    const fileSizeMatches = file?.size && file?.size < AVATAR_MAX_SIZE;

    if (file && fileTypeMatches && fileSizeMatches) {
      setAvatarError('');

      const avatarName = v4();
      const avatarType = file.name.match(/(?<=\.).+/);
      const newAvatarUrl = `avatars/${avatarName}.${avatarType && avatarType[0]}`;
      const avatarRef = ref(storage, newAvatarUrl);

      await uploadBytes(avatarRef, file);

      await changeAvatar(userId, newAvatarUrl);

      dispatch(authActions.changeAvatarUrl(newAvatarUrl));

      await getImageURL(`${newAvatarUrl}`).then((value: string) => {
        setAvatarUrl(value);
      });
    }

    if (file && !fileTypeMatches) {
      setAvatarError(AVATAR_TYPE_ERROR);
    }

    if (file && !fileSizeMatches) {
      setAvatarError(AVATAR_SIZE_ERROR);
    }
  };

  useEffect(() => {
    getImageURL(`${userAvatarUrl}`).then((value: string) => {
      setAvatarUrl(value);
    });
  }, [userAvatarUrl]);

  return (
    <>
      <div className={style.wrapper}>
        <label className={style.label}>
          <input
            onChange={handleAvatarFileInputChange}
            className={style['visually-hidden']}
            type="file"
            name="user-avatar"
            accept="image/png, image/jpeg"
          />
          <span className={style.avatar}>
            {avatarUrl !== '' ? (
              <Image
                src={avatarUrl}
                className={style.image}
                priority
                width="148"
                height="148"
                alt="Аватар пользователя"
              />
            ) : (
              <svg height={22} width={22}>
                <g fill={`url(#${gradientId})`}>
                  <Gradient
                    id={gradientId}
                    startColor="#BC9CFF"
                    endColor="#8BA4F9"
                  />
                  <UploadSVG />
                </g>
              </svg>
            )}
          </span>
        </label>
      </div>
      {avatarError && <span className={style.error}>{avatarError}</span>}
    </>
  );
};

export { AvatarUpload };
