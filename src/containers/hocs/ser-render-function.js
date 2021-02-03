import React from 'react';

const setRenderFunction = renderFunction => Wrapped => {
    return props => {
        return (
            <Wrapped {...props}>
                {renderFunction}
            </Wrapped>
        );
    };
};

export default setRenderFunction;