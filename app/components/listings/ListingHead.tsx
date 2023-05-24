'use client';

import useCountries from '@/app/hooks/useCountries';
import HeartButton from '../HeartButton';
import { SafeUser } from '@/app/types';
import Heading from '../Heading';
import Image from 'next/image';

interface ListingHeadProps {
  id: string;
  title: string;
  imageSrc: string;
  locationValue: string;
  currentUser?: SafeUser | null;
}

export default function ListingHead({
  id,
  title,
  imageSrc,
  locationValue,
  currentUser
}: ListingHeadProps) {

  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading 
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="
        w-full
        h-[60vh]
        overflow-hidden
        rounded-xl
        relative
      ">
        <Image
          fill
          alt="Image"
          src={imageSrc}
          className="object-cover w-full"
        />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}
