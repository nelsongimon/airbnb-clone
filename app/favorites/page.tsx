import getCurrentUser from '../actions/getCurrentUser';
import EmptyState from '../components/EmptyState';
import getFavorites from '../actions/getFavorites';
import FavoritesClient from './FavoritesClient';

export default async function FavoritesPage() {
  const currentUser = await getCurrentUser();
  const favorites = await getFavorites();

  if (!currentUser) {
    return (
      <EmptyState 
        title="Unauthorized"
        subtitle="Please login"
      />
    )
  }

  if (favorites.length === 0) {
    return (
      <EmptyState 
        title="No favorites found"
        subtitle="Looks like you have no favorite listings"
      />
    );
  }

  return (
    <FavoritesClient 
      favorites={favorites}
      currentUser={currentUser}
    />
  );
}
