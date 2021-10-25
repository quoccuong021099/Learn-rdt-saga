import cityApi from "api/cityApi";
import { NotFound, PrivateRoute } from "components/common";
import { AdminLayout } from "components/Layout";
import LoginPage from "features/auth/pages/LoginPage";
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
function App() {
  React.useEffect(() => {
    cityApi.getAll().then(res => console.log(res.pagination)
    );
  }, [])

  return (
    <>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch></>
  );
}

export default App;
