import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AllTherapists from './Pages/AllTherapists/AllTherapists';
import BookingDetails from './Pages/BookingDetails/Booking/BookingDetails';
import Equipments from './Pages/Equipments/Equipments';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import OrderConfirm from './Pages/OrderConfirm/OrderConfirm';
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
            <PrivateRoute path="/bookingDetails/:physicalServiceTitle/:physicalServiceDescription/:physicalServiceDetails/" >
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <Route path="/therapies">
              <Therapies></Therapies>
            </Route>
            <Route path="/therapists">
              <AllTherapists></AllTherapists>
            </Route>
            <PrivateRoute path="/orderConfirm">
              <OrderConfirm></OrderConfirm>
            </PrivateRoute>
            <PrivateRoute path="/equipments">
              <Equipments></Equipments>
            </PrivateRoute>
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
