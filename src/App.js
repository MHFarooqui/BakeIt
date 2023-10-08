import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import AddItems from './screens/AddItems';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';


function App() {
  return (
    <CartProvider>
      <Router>
        <div >
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/createUser' element={<SignUp />} />
            <Route exact path='/additems' element={<AddItems />} />
            <Route exact path='/myOrder' element={<MyOrder />} />
          </Routes>

        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
