import { compose, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';
import reducers from '../reducer';

const sagaMiddleware = createSagaMiddleware();

function* rootsaga() {
    yield all([


    ]);
}

const middlewares = [];
const composeEnhancers =
    (typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

if (process.env.NODE_ENV === 'development') {
    // middlewares.push(logger);
}

middlewares.push(sagaMiddleware);

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootsaga)

export default store