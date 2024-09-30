export const getMockApi = async (): Promise<string[]> => {
  const mockData = ['Mock Item 1', 'Mock Item 2', 'Mock Item 3'];
  return new Promise((resolve) => setTimeout(() => resolve(mockData), 1000));
};
