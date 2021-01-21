import React from 'react';
import {connect} from 'react-redux';

import {addToFavorite, removeFromFavorite} from '../../actions';

import './current-currencies-item.scss';

const CurrentCurrenciesItem = ({abbr, text, rate, favorite, id, addToFavorite, removeFromFavorite, idx}) => {

    const heart = <i className="bi bi-heart item__favorite" onClick={() => addToFavorite(id)}/>,
        filledHeart =
            <i className="bi bi-heart-fill item__favorite"
               onClick={() => removeFromFavorite(id)}/>;

    return (
        <tr className={`current-currencies-item ${favorite ? 'table-primary' : null}`}>
            <th scope="row">{idx + 1}</th>
            <td><b>{abbr}</b></td>
            <td>{text}</td>
            <td>{rate}</td>
            <td>
                {favorite ? filledHeart : heart}
            </td>
        </tr>
    );
};

const mapDispatchToProps = {
    addToFavorite,
    removeFromFavorite,
};

export default connect(null, mapDispatchToProps)(CurrentCurrenciesItem);