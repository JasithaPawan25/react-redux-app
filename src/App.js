import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';
import ErrorPage from './containers/ErrorPage';


function App() {
  return ( <div>
    <Header/>
    <Router>
 
    <Routes>
 
      {/* <Route path="/" element={<Header/>}/> */}
      <Route path="/" element={<ProductListing/>}/>
      <Route path="/products/:productId" element={<ProductDetails/>}/>
      {/* <Route path="/listing" element={<ProductListing/>}/> */}
      <Route path="*" element={<ErrorPage/>}/>
      </Routes>

      </Router></div>

  );
}

export default App;
