import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './container/UserListContainer';
import UserForm from './container/UserFormContainer'
import './index.css';
import { Router, Route, browserHistory} from 'react-router'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


let store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={UserList}></Route>
        <Route path='/form' component={UserForm}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
