import getReservations from '@/app/actions/getReservations';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';

interface IParams {
  listingId: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);


  if (!listing) {
    return (
      <EmptyState />
    );
  }

  return (
    <ListingClient 
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  );
}
