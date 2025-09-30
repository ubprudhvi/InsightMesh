import { compose, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects';
import reducers from '../reducer';

const sagaMiddleware = createSagaMiddleware();

function* rootsaga() {
    yield all([


    ]);
}

const middleware = [];
const composeEnhancer = (typeof window !== undefined && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

middleware.push(sagaMiddleware)

const store = createStore(reducers, composeEnhancer(applyMiddleware(...middleware)));

sagaMiddleware.run(rootsaga)

export default store