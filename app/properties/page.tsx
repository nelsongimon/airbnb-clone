import getCurrentUser from '../actions/getCurrentUser';
import EmptyState from '../components/EmptyState';
import PropertiesClient from './PropertiesClient';
import getListings from '../actions/getListings';


export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState 
        title="Unauthorized"
        subtitle="Please login"
      />
    )
  }

  const properties = await getListings({
    userId: currentUser.id
  });

  if (properties.length === 0) {
    return (
      <EmptyState 
        title="No properties found"
        subtitle="Looks like you haven't properties"
      />
    )
  }
  return (
    <PropertiesClient
      properties={properties}
      currentUser={currentUser}
    />
  );
}
