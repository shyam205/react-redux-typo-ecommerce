import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers/index';
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
 }

 const persistedReducer = persistReducer(persistConfig, reducers)

// const store = createStore(
//     persistedReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

// export default store

export default () => {
    let store = createStore(
      persistedReducer,
    
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
 
    let persistor = persistStore(store)
    return { store, persistor }
 }
