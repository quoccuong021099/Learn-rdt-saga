import { Button } from "@material-ui/core";
import cityApi from "api/cityApi";
import { useAppDispatch } from "app/hooks";
import { NotFound, PrivateRoute } from "components/common";
import { AdminLayout } from "components/Layout";
import { authActions } from "features/auth/authSlice";
import LoginPage from "features/auth/pages/LoginPage";
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
function App() {

  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(authActions.logout())
  }

  React.useEffect(() => {
    cityApi.getAll().then(res => console.log(res.pagination)
    );
  }, [])

  return (
    <>
      <Button onClick={handleLogout} variant="contained" color="primary">Logout</Button>
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
