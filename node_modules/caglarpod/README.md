
# CaglarPod

CaglarPod inpired from Riverpod packge in Flutter Framework. Caglar means 'runs' or 'flows' in Turkish. CaglarPod is a state management library for React applications that provides a simple and powerful way to manage state, perform queries, handle real-time data streams, and derive state. It is designed to work seamlessly with TypeScript and JavaScript.


## Getting Started

### StateNotifier

`StateNotifier` is a class that manages state and notifies subscribers when the state changes.

**Example: CounterNotifier**

```typescript
import { StateNotifier } from 'caglarpod';

interface CounterState {
  count: number;
}

class CounterNotifier extends StateNotifier<CounterState> {
  constructor() {
    super({ count: 0 });
  }

  increment() {
    this.setState({ count: this.getState().count + 1 });
  }

  decrement() {
    this.setState({ count: this.getState().count - 1 });
  }
}

export default new CounterNotifier();
```

### ProviderScope

`ProviderScope` is a component that provides the context for state management and query handling.

**Example: App Component**

```tsx
import React from 'react';
import { ProviderScope } from 'caglarpod';
import CounterComponent from './CounterComponent';

const App: React.FC = () => (
  <ProviderScope>
    <div>
      <h1>My App</h1>
      <CounterComponent />
    </div>
  </ProviderScope>
);

export default App;
```

### useStateNotifier

`useStateNotifier` is a hook that subscribes to a `StateNotifier` and returns the current state.

**Example: CounterComponent**

```tsx
import React from 'react';
import { useStateNotifier } from 'caglarpod';
import counterNotifier from './counterNotifier';

const CounterComponent: React.FC = () => {
  const state = useStateNotifier(counterNotifier);

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => counterNotifier.increment()}>Increment</button>
      <button onClick={() => counterNotifier.decrement()}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
```

### useQuery

`useQuery` is a hook that fetches data from an API.

**Example: UsersComponent**

**api.ts**

```typescript
import { User } from './types';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};
```

**UsersComponent.tsx**

```tsx
import React from 'react';
import { useQuery } from 'caglarpod';
import { fetchUsers } from './api';

const UsersComponent: React.FC = () => {
  const { data, error, isLoading } = useQuery('users', fetchUsers);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data?.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;
```

### useStreamQuery

`useStreamQuery` is a hook that subscribes to an observable stream and handles real-time data.

**Example: StreamComponent**

**simpleStream.ts**

```typescript
import { Observable } from 'rxjs';

let count = 0;

export const createSimpleObservable = (): Observable<{ count: number }> => {
  return new Observable(subscriber => {
    const intervalId = setInterval(() => {
      count += 1;
      subscriber.next({ count });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });
};
```

**StreamComponent.tsx**

```tsx
import React from 'react';
import { useStreamQuery } from 'caglarpod';
import { createSimpleObservable } from './simpleStream';

const simpleObservable = createSimpleObservable();

const StreamComponent: React.FC = () => {
  const { data, error, isLoading } = useStreamQuery(simpleObservable);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Real-time Counter: {data?.count}</h2>
    </div>
  );
};

export default StreamComponent;
```

### Derived State

Derived state allows you to compute new state based on existing state.

**Example: ItemListComponent**

**itemNotifier.ts**

```typescript
import { StateNotifier } from 'caglarpod';

interface Item {
  id: number;
  name: string;
}

interface ItemState {
  items: Item[];
  searchQuery: string;
}

class ItemNotifier extends StateNotifier<ItemState> {
  constructor() {
    super({ items: [], searchQuery: '' });
  }

  addItem(name: string) {
    const newItem: Item = { id: Date.now(), name };
    this.setState({ ...this.getState(), items: [...this.getState().items, newItem] });
  }

  setSearchQuery(query: string) {
    this.setState({ ...this.getState(), searchQuery: query });
  }

  getFilteredItems() {
    const { items, searchQuery } = this.getState();
    return items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }
}

export default new ItemNotifier();
```

**ItemListComponent.tsx**

```tsx
import React, { useState } from 'react';
import { useStateNotifier, useStateSelector } from 'caglarpod';
import itemNotifier from './itemNotifier';

const ItemListComponent: React.FC = () => {
  const state = useStateNotifier(itemNotifier);
  const filteredItems = useStateSelector(itemNotifier, itemNotifier.getFilteredItems.bind(itemNotifier));
  const [newItemName, setNewItemName] = useState('');

  const addItem = () => {
    if (newItemName.trim()) {
      itemNotifier.addItem(newItemName.trim());
      setNewItemName('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    itemNotifier.setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>Item List</h2>
      <input
        type="text"
        placeholder="Search..."
        value={state.searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Item"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ItemListComponent;
```

## API Reference

### StateNotifier

- `constructor(initialState: T)`
- `getState(): T`
- `setState(newState: T): void`
- `subscribe(listener: (state: T) => void): () => void`
- `subscribeToSelector<U>(selector: (state: T) => U, listener: (selectedState: U) => void): () => void`

### ProviderScope

- Wraps your application to provide the necessary context for state management and query handling.

### Hooks

- `useStateNotifier(notifier: StateNotifier<T>): T`
- `useQuery<TData>(key: string, queryFn: () => Promise<TData>): UseQueryResult<TData>`
- `useStreamQuery<T>(observable: Observable<T>): StreamQueryResult<T>`
- `useStateSelector<T, U>(notifier: StateNotifier<T>, selector: (state: T) => U): U`

## Conclusion

CaglarPod provides a robust and flexible way to manage state, perform queries, handle real-time data streams, and derive state in React applications. With its simple API and seamless integration with TypeScript, you can easily build powerful and maintainable applications.


