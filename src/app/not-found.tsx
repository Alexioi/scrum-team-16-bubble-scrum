import React from 'react';

import { ErrorMessage } from '@/components';

const NotFound = () => {
  return (
    <ErrorMessage
      message="Сейчас здесь ничего нет"
      description="Но скоро появится что-то интересное..."
    />
  );
};

export default NotFound;
