'use client';

import { SafeListing, SafeReservation, SafeUser } from '../types';
import ListingCard from '../components/listings/ListingCard';
import Container from '../components/Container';
import { useCallback, useState } from 'react';
import Heading from '../components/Heading';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import axios from 'axios';

interface PropertiesClientProps {
  properties: SafeListing[];
  currentUser?: SafeUser | null;
}

export default function PropertiesClient({ 
  currentUser,
  properties
}: PropertiesClientProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState('');

  const onCancel = useCallback((id: string) => {
    setDeletingId(id);

    axios.delete(`/api/listings/${id}`)
      .then(() => {
        toast.success('Property deleted');
        router.refresh();
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error);
      })
      .finally(() => {
        setDeletingId('');
      });
  }, [router]);

  return (
    <Container>
      <Heading 
        title="Properties"
        subtitle="List of your properties"
      />
      <div className="
        mt-10
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      ">
        {properties.map((property) => (
          <ListingCard 
            key={property.id} 
            data={property}
            actionId={property.id}
            onAction={onCancel}
            disabled={deletingId === property.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
