'use client';

import { useEffect } from 'react';
import EmptyState from './components/EmptyState';

interface ErrorStateProps {
  error: Error;
}

export default function ErrorState({ 
  error
}: ErrorStateProps) {

  useEffect((): any => {
    console.error(error);

    return (
      <EmptyState
        title="Ohh"
        subtitle="Something went wrong!"
      />
    )
  }, [error]);
  return (
    <div>error</div> 
  );
}
