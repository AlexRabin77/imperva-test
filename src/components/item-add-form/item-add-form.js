import React, { useState } from 'react';
import Select from 'react-select';

import './item-add-form.css';

const urlTypes = [
    { value: 'EQUALS', label: 'URL is' },
    { value: 'NOT_EQUALS', label: 'URL is not' },
    { value: 'CONTAINS', label: 'URL contains' },
    { value: 'NOT_CONTAINS', label: 'URL not contains' },
    { value: 'PREFIX', label: 'URL starts with' },
    { value: 'SUFFIX', label: 'URL ends with' },
];

const ERROR_MESSAGE = 'URLs must start with ‘/’';

const ItemAddForm = ({onUrlTypeChanged = () => {}, onUrlAdded = () => {}}) => {

    const [url, setUrl] = useState(null);
    const [currentUrlType, setCurrentUrlType] = useState(null);
    const [isValid, setValidation] = useState(true);

    const handleUrlChanged = (event) => {
        setUrl(event.target.value);
    };

    const handleUrlTypeChanged = ({label}) => {
        setCurrentUrlType(label);
        onUrlTypeChanged(label);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!url.startsWith('/')) {
            setValidation(false);
        } else {
            setValidation(true);

            if (currentUrlType) {
                onUrlAdded(currentUrlType, url);
            }
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-row">
                <div className="col-2">
                    <label className="col-sm-12 col-form-label">Block URLs</label>
                </div>
                <div className="col-3">
                    <Select
                        onChange={handleUrlTypeChanged}
                        options={urlTypes}
                    />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="e.g /index.php" name='url'
                           onChange={handleUrlChanged}/>
                    <span className="error">{isValid ? '' : ERROR_MESSAGE}</span>
                </div>
                <div className="col">
                    <button type="submit"
                            className="btn btn-primary add-btn">
                        Add
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ItemAddForm;
