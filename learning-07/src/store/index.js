import { createStore } from 'redux'
import rootReducer from './reducers'


export default function configureStore(initialState) {

    const store = createStore(rootReducer,initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
        );
    store.subscribe(()=>console.log('监听store的数据变化=',store.getState()))
    return store
}