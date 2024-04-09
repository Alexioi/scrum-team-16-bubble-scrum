import { ref, getDownloadURL } from 'firebase/storage';

import { storage } from '../../initFirebase';

const getImageURL = async (filePath: string) => {
  const imageRef = ref(storage, filePath);

  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    return '';
  }
};

export { getImageURL };
