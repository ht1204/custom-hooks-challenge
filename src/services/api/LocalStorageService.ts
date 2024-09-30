export const getLocalStorageOptions = (): string[] => {
    const options = localStorage.getItem('items');
    return options ? JSON.parse(options) : ['Option 1', 'Option 2', 'Option 3'];
};

export const setLocalStorageSelectedOption = (selectedOption: string) => {
    localStorage.setItem('items', selectedOption);
};
