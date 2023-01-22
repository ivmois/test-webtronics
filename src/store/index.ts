import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reveiwReducer } from './reducers/reveiwReducer';

export const rootReducer = combineReducers({
  review: reveiwReducer,
});

export const store = createStore(rootReducer, applyMiddleware());

export type RootState = ReturnType<typeof rootReducer>;
