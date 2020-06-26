import React from 'react';

import './footer.css';

const Footer = ({urlPerType = {}}) => {
    const modalBody = Object.entries(urlPerType).map(([urlType, urls]) => {
        let result = '';
        if (urls.length > 0){
            result = `${urlType}: [${urls.map(url => `{text: ${url}}`).join(', ')}]`;

        }
        return result;
    });

    return (
        <div>
              <div className="col-12 container">
                <button type="button" className="btn btn-primary save-btn" 
                        data-toggle="modal" 
                        data-target="#exampleModal">
                    Save
                </button>
              </div>
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">URLs values</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        {modalBody.map((row, index) => <div key={index}>{row}</div>)}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;