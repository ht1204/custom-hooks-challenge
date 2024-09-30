import { useState, useEffect } from 'react';
import { DataFetchManager } from '../services/api/DataFetchManager';
import { LocalStorageStrategy } from '../services/strategy/LocalStorageStrategy';
import { MockAPIStrategy } from '../services/strategy/MockAPIStrategy';
import { AnotherMockAPIStrategy } from '../services/strategy/AnotherMockAPIStrategy';

export type TApiDataSource = 'localStorage' | 'mockAPI' | 'anotherMockAPI';

export const useDropdown = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [strategy, setStrategy] = useState<TApiDataSource>('localStorage');

  useEffect(() => {
    let dataFetchingManager: DataFetchManager;

    switch (strategy) {
      case 'mockAPI': { 
        const instance = new MockAPIStrategy();
        dataFetchingManager = new DataFetchManager(instance);
        break; 
      }
      case 'anotherMockAPI': {
        const instance = new AnotherMockAPIStrategy();
        dataFetchingManager = new DataFetchManager(instance);
        break;
      }
      default: {
        const instance = new LocalStorageStrategy();
        dataFetchingManager = new DataFetchManager(instance);
        break;
      }
    }

    dataFetchingManager.fetchOptions().then(data => setOptions(data));
    const savedSelections = localStorage.getItem(`selections-${strategy}`);
    if (savedSelections) {
      setSelectedOptions(JSON.parse(savedSelections));
    } else {
      setSelectedOptions([]);
    }
  }, [strategy]);

  const handleSelect = (value: string) => {
    const isSelected = selectedOptions.includes(value);
    let updatedSelections: string[];

    if (isSelected) {
      updatedSelections = selectedOptions.filter(option => option !== value);
    } else {
      updatedSelections = [...selectedOptions, value];
    }

    setSelectedOptions(updatedSelections);
    localStorage.setItem(`selections-${strategy}`, JSON.stringify(updatedSelections));
  };

  return { 
    options, 
    selectedOptions, 
    handleSelect, 
    setStrategy, 
    strategy 
  };
};
