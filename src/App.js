import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllProducts from './pages/AllProducts/AllProducts';
import AuthProvider from './context/AuthProvider';
import Login from './components/shared/Login/Login/Login';
import Register from './components/shared/Register/Register';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
