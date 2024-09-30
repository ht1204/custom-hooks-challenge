// @packages
import { FC, ChangeEvent, useState } from 'react';

// @components
import { Dropdown } from '../Dropdown';

// @hooks
import { useDropdown, type TApiDataSource } from '../../hooks/useDropdown';

// @styles
import styles from './Menu.module.css';

const Menu: FC = () => {

    const [api, setApi] = useState<string>('localStorage');

    const {
        options,
        selectedOptions,
        handleSelect,
        setStrategy,
        strategy
    } = useDropdown();

    const selectedAPI: Record<TApiDataSource, string> = {
        'localStorage': 'localStorage',
        'mockAPI': 'mockAPI',
        'anotherMockAPI': 'anotherMockAPI'
    }


    function handleChangeAPI(event: ChangeEvent<HTMLSelectElement>) {
        const apiSelected = event.target.value as TApiDataSource;
        setApi(selectedAPI[apiSelected]);
        setStrategy(apiSelected);
    }

    return (
        <div className={styles["app-container"]}>
            <section className={styles["dropdown-dashboard"]}>
                <h1>Dropdown Challenge</h1>

                <div className={styles["strategy-selector"]}>
                    <label htmlFor="data-source">Choose Data Source:</label>
                    <select
                        id="data-source"
                        value={strategy}
                        onChange={handleChangeAPI}
                        className={styles["data-source-select"]}
                    >
                        <option value="localStorage">Local Storage</option>
                        <option value="mockAPI">Mock API</option>
                        <option value="anotherMockAPI">Another Mock API</option>
                    </select>
                </div>

                <Dropdown
                    options={options}
                    onSelect={handleSelect}
                    selectedOptions={selectedOptions}
                />

                <div className={styles["selected-option"]}>
                    <h3>Selected Options for {api}:</h3>
                    {selectedOptions.length ? (
                        <ul>
                            {selectedOptions.map((option, index) => (
                                <li key={`item-${index}`}>{option}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No options selected</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Menu;
