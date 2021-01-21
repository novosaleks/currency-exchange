import React from 'react';

import './app-form.scss';

const AppForm = ({overallList}) => {
    const selectionOptions = overallList.map(item => {
        const {id, abbr, text} = item;

        return (
            <option key={id} value={id}>
                {abbr}: {text}
            </option>
        );
    });

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-12">
                        <form>
                            <div className="mb-3">
                                <select className="form-select" aria-label="Default select example"
                                        defaultValue='Open this select menu'>
                                    <option>Choose your currency</option>
                                    {selectionOptions}
                                </select>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <select className="form-select" aria-label="Default select example"
                                            defaultValue='Open this select menu'>
                                        <option>Choose your currency</option>
                                        {selectionOptions}
                                    </select>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppForm;