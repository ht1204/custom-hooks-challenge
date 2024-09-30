export const getAnotherMockApi = async (): Promise<string[]> => {
    const mockData = ['Option Item 1', 'Option Item 2', 'Option Item 3'];
    return new Promise((resolve) => setTimeout(() => resolve(mockData), 1200));
};