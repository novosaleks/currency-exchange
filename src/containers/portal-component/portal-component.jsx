import ReactDOM from 'react-dom';

const PortalComponent = ({children, id}) => {

    return ReactDOM.createPortal(
        children,
        document.getElementById(id)
    );
};

export default PortalComponent;