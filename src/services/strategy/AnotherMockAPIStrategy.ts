import { IMockDataStrategy } from '../interfaces/IMockDataStrategy';
import { getAnotherMockApi } from '../api/AnotherMockApiService';

export class AnotherMockAPIStrategy implements IMockDataStrategy {
  fetchOptions(): Promise<string[]> {
    return getAnotherMockApi();
  }
}
