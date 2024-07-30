import React from 'react';
import { useStreamQuery } from '../../core/useStreamQuery.js';
import { createSimpleObservable } from './simpleStream';

// Define the StreamComponent
const StreamComponent: React.FC = () => {
  const { data, error, isLoading } = useStreamQuery(createSimpleObservable());

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Real-time Counter: {data?.count}</h2>
    </div>
  );
};

export default StreamComponent;
