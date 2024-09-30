import { FC, ChangeEvent } from 'react';

type TDropdownProps = {
    options: string[];
    onSelect: (value: string) => void;
    selectedOptions: string[]; 
};

const Dropdown: FC<TDropdownProps> = ({ options, onSelect, selectedOptions }) => {

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        onSelect(value);
    }

    return (
        <div>
            <select multiple={true} value={selectedOptions} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
