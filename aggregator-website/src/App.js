import './App.scss'

import LandingPage from './components/LandingPage';
import MobileNav from './components/MobileNav'
import {createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom'
import TentingList from './components/Tentingcategory/TentingList';
import ChairsList from './components/ChairsCategory/ChairsList';
import LinensList from './components/LinensCategory/LinensList';
import Cart from './components/Cart/Cart';
import CartProvider from './components/CartProvider';
import LocationDetect from './components/LocationDetect';
import ShoppingCartItems from './components/Cart/ShoppingCartItems';
import ShoppingCart from './components/Cart/ShoppingCart';
import AddressComp from './components/AddressComponent/AddressComp';
import ProductDetails from './components/ProductDetails';
import ChairsComp from './components/ChairsComp';
import TentingComp from './components/TentingComp';
import LinensComp from './components/LinensComp';
import AuthComp from './components/AuthenticationForms/AuthComp';
import PartyRentals from './components/PartyRentals';
import ServicesComp from './components/PartServices/ServicesComp';
import PartyServicesComp from './components/PartyServicesComp';
import ProductPartyService from './components/PartServices/ProductPartyService';

const routes = createHashRouter([
  {
    path:'/',
    element:<MobileNav/>,
    children:[
       { index:true,element:<LandingPage/>},
      {
      path:'signup',
      element:<AuthComp/>
    },
    {
      path:'login',
      element:<AuthComp/>
    },
  
   {
        path:'florist',
        element:<PartyServicesComp/>,
        children:[
          {index:true,
            element:<ServicesComp/>
          },
          {
            path:':id',
            element:<ProductPartyService/>
          }
        ]
      },
      {
        path:'wedding-planner',
        element:<PartyServicesComp/>,
        children:[
        {
          index:true,
          element:<ServicesComp/>
        },
        {
            path:':id',
            element:<ProductPartyService/>
          }
        ]
      },{
        path:'staffing-services',
        element:<ServicesComp/>
      },{
        path:'face-paint',
        element:<ServicesComp/>
      },{
        path:'magicians',
        element:<ServicesComp/>
      },{
        path:'dj',
        element:<ServicesComp/>
      },{
        path:'casino-setups',
        element:<ServicesComp/>
      },{
        path:'bar-tending',
        element:<ServicesComp/>
      }
     
    ]
    
  },
  {
    path:"/cart",
    element:<ShoppingCart/>
  },
  {
    path:"/address",
    element:<AddressComp/>
  },
 

])



function App() {
  return (
   
   <RouterProvider router={routes}/>
   
    
    
  );
}

export default App;
