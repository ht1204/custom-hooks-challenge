export interface IMockDataStrategy {
    fetchOptions(): Promise<string[]>;
}
  