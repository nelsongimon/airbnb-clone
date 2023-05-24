import EmptyState from '../components/EmptyState';
import getCurrentUser from '../actions/getCurrentUser';
import getReservations from '../actions/getReservations';
import RerservationsClient from './RerservationsClient';

 
export default async function ReservationsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState 
        title="Unauthorized"
        subtitle="Please login"
      />
    )
  }
  const reservations = await getReservations({
    userId: currentUser.id
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservation found"
        subtitle="Looks like you have no reservation on your properties"
      />
    )
  }
  return (
    <RerservationsClient 
      currentUser={currentUser}
      reservations={reservations}
    />
  );
}
