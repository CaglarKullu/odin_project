import { StateNotifier } from '../../core/StateNotifier';

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