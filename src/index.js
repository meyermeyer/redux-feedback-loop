import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const initialFeedback = {
    feeling : '',
    understanding : '',
    support: '',
    comments : ''
}

const feedbackReducer = (state=initialFeedback, action) => {
    console.log('in feedbackReducer');
    if (action.type === 'UPDATE_FEEDBACK'){
        return {
            ...state,
            [action.name]: action.payload
        }
    }
    return state
}



const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
