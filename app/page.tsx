import getListings, { IListingParams } from './actions/getListings';
import ListingCard from './components/listings/ListingCard';
import getCurrentUser from './actions/getCurrentUser';
import EmptyState from './components/EmptyState';
import Container from './components/Container';
import { SafeListing } from './types';

interface HomeProps { 
  searchParams: IListingParams;
}

export const dynamic = 'force-dynamic';

export default async function Home({ searchParams }: HomeProps) {
  console.log(searchParams);
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;

  }

  return (
    <Container>
      <div className="
        pt-32
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-8
      ">
          {listings.map((listing) => (
            <div key={listing.id}>
              <ListingCard 
                key={listing.id} 
                currentUser={currentUser}
                data={listing} 
              />
            </div>
          ))}
      </div>
    </Container>
  );
}
