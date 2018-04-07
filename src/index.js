import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import About from './components/about';
import Abacus from './components/abacus';
import Levels from './components/levels';
import Fees from './components/fees';
import Contact from './components/contact';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
      <Switch>
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/about" component={About} />
        <Route path="/abacus" component={Abacus} />
        <Route path="/levels" component={Levels} />
        <Route path="/fees" component={Fees} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={PostsIndex} />
      </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
