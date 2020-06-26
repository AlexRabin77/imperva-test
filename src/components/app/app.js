import React, { useState } from 'react';
import ItemAddForm from '../item-add-form';
import UrlContainer from '../url-container';
import Footer from '../footer';

import './app.css';

const App = () => {
    const [urlPerType, setUrlPerType] = useState({});
    const [currentUrlType, setCurrentUrlType] = useState(null);

    const onUrlAdded = (urlType, url) => {
        const currentUrls = urlPerType[urlType] || [];

        setUrlPerType({
            ...urlPerType,
            [urlType]: [...currentUrls, url],
        });
    };

    const onUrlDelete = (urlType, deletedUrl) => {
        const currentUrls = urlPerType[urlType] || [];

        setUrlPerType({
            ...urlPerType,
            [urlType]: currentUrls.filter(url => url !== deletedUrl),
        });
    };

    const onUrlTypeChanged = (urlType) => {
        setCurrentUrlType(urlType);

    };

    const urlTypeToDisplay = Object.entries(urlPerType).filter(([urlType, urls]) => {
        return urls.length > 0 || currentUrlType === urlType;
    });

    return (
        <div className="imperva-app">
            <ItemAddForm onUrlAdded={onUrlAdded} onUrlTypeChanged={onUrlTypeChanged} />
            {urlTypeToDisplay.map(([urlType, urls]) =>
                <UrlContainer key={urlType} urlType={urlType} urls={urls} onUrlDelete={onUrlDelete} />)}
            <Footer urlPerType={urlPerType} />
        </div>
    );
};

export default App;
