import React, {useEffect} from 'react';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import AppHeader from '../components/app-header';
import AppForm from '../components/pages/app-form';
import CurrentCurrencies from '../components/pages/current-currencies';
import {setContextConsumer} from '../containers/hocs';

import {connect} from 'react-redux';
import {fetchCurrencies} from '../actions';

const App = ({fetchData, overallList}) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
            <AppHeader/>
            <AppForm overallList={overallList} />
            <CurrentCurrencies overallList={overallList}/>
        </>
    );
};

const mapStateToProps = ({currencyList: {overallList}}) => ({
    overallList,
});

const mapDispatchToProps = (dispatch, {value}) => {
    return {
        fetchData: () => fetchCurrencies(dispatch, value)
    };
};

export default setContextConsumer()(connect(mapStateToProps, mapDispatchToProps)(App));