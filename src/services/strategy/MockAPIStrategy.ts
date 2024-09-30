import { IMockDataStrategy } from '../interfaces/IMockDataStrategy';
import { getMockApi } from '../api/MockApiService';

export class MockAPIStrategy implements IMockDataStrategy {
  fetchOptions(): Promise<string[]> {
    return getMockApi();
  }
}
