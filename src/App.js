import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AllTherapists from './Pages/AllTherapists/AllTherapists';
import BookingDetails from './Pages/BookingDetails/Booking/BookingDetails';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Therapists from './Pages/Home/Therapists/Therapists';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Therapies from './Pages/Therapies/Therapies';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/bookingDetails/:physicalServiceTitle/:physicalServiceDescription/:physicalServiceImg" >
              <BookingDetails></BookingDetails>
            </PrivateRoute>.
            <Route path="/therapies">
              <Therapies></Therapies>
            </Route>
            <Route path="/therapists">
              <AllTherapists></AllTherapists>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
