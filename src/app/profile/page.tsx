'use client';

import { redirect } from 'next/navigation';

import { selectUID } from '@/store';
import { useAppSelector } from '@/hooks';
import { Modal } from '@/components';
import { useState } from 'react';

const Profile = () => {
  const [open, setOpen] = useState(false);

  const uid = useAppSelector(selectUID);

  if (uid === null) {
    return redirect('/');
  }

  return (
    <>
      <button onClick={() => setOpen(true)} />
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div style={{ height: '2000px' }} />
      </Modal>
    </>
  );
};

export default Profile;
