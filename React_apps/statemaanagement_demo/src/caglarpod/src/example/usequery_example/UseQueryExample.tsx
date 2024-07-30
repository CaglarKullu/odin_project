import React from 'react';
import { useQuery } from '../../core/useQuery';
import { fetchUsers } from './api';
import { User } from './types';

const isErrorWithMessage = (error: unknown): error is { message: string } => {
  return typeof error === 'object' && error !== null && 'message' in error;
};

// Define the UsersComponent
const UsersComponent: React.FC = () => {
  const { data, error, isLoading } = useQuery<User[]>('users', fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {isErrorWithMessage(error) ? error.message : 'Unknown error'}</div>;

  return (
    <div>
      <h2>Users List</h2>
      {data ? (
        <ul>
          {data.map((user: User) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <div>No users available</div>
      )}
    </div>
  );
};

export default UsersComponent;
