import React from 'react';
import GlobalStyle from 'theme/globalStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import MainTemplate from 'templates/MainTemplate';

// Assets & components
import Home from 'views/Home';
import Shop from 'views/Shop';
import AdminLogin from 'views/AdminLogin';
import AdminPanel from 'views/AdminPanel';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/admin" component={AdminPanel} />
          <Route path="/admin/login" component={AdminLogin} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default App;
