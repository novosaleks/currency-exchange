import React, {useContext} from 'react';
import Context from '../context-api';

const setContextConsumer = () => Wrapped => {
    return (props) => {
        const value = useContext(Context);

        return <Wrapped value={value} {...props}/>;
    };
};

export default setContextConsumer;