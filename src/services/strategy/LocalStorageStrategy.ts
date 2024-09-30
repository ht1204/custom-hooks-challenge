import { IMockDataStrategy } from '../interfaces/IMockDataStrategy';

export class LocalStorageStrategy implements IMockDataStrategy {
  fetchOptions(): Promise<string[]> {
    const options = localStorage.getItem('items');
    return Promise.resolve(options ? JSON.parse(options) : ['LS Item 1', 'LS Item 2', 'LS Item 3', 'LS Item 4', 'LS Item 5']);
  }
}
