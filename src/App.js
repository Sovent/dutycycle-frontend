import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { WithAuthentication, PrivateRoute } from './Auth';
import SignIn from './SignIn';
import SignUp from './SignUp';
import GroupsList from './GroupsList';
import Group from './Group';

function App() {
  return (
    <BrowserRouter>
      <WithAuthentication>
        <Switch>
          <PrivateRoute exact path="/">
            <GroupsList />
          </PrivateRoute>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute path="/groups/:groupId">
            <Group />
          </PrivateRoute>
        </Switch>
      </WithAuthentication>
    </BrowserRouter>
  );
}

export default App;
