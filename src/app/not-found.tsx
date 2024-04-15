import { ErrorMessage } from '@/components';
import React from 'react';

const NotFound = () => {
  return (
    <ErrorMessage
      message="Сейчас здесь ничего нет"
      description="Но скоро появится что-то интересное..."
    />
  );
};

export default NotFound;
