'use client';

import { PuffLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <PuffLoader 
        size={100}
        color="red"
      />
    </div>
  );
}
