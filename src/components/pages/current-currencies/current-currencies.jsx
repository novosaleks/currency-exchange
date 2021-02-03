import React from 'react';
import CurrentCurrenciesItem from '../../current-currencies-item';

import './current-currencies.scss';
import DefaultCurrencyPanel from '../../default-currency-panel';


const CurrentCurrencies = ({overallList}) => {
    const rows = overallList.map(item => {
        return <CurrentCurrenciesItem key={item.id}
                                      {...item}/>;
    });

    return (
        <div className='current-currencies'>
            <div className="container">
                <h2>Currencies</h2>
                <DefaultCurrencyPanel/>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Text</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Favorite</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentCurrencies;