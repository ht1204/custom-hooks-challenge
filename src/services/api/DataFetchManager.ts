import { IMockDataStrategy } from '../interfaces/IMockDataStrategy';

export class DataFetchManager {
  private strategy: IMockDataStrategy;

  constructor(strategy: IMockDataStrategy) {
    this.strategy = strategy;
  }

  setStrategy(newStrategy: IMockDataStrategy) {
    this.strategy = newStrategy;
  }

  fetchOptions(): Promise<string[]> {
    return this.strategy.fetchOptions();
  }
}
