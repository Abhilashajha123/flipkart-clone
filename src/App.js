import React from 'react'
import Header from './component/header/Header'
import { ThemeProvider } from '@mui/material/styles';
import Home from './component/home/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Cart from './component/cart/Cart';
import { TemplateProvider } from './template/TemplateProvider.js';
import ContextProvider from './context/ContextProvider';

const App = () => {
  return (
    <div>
      
        <TemplateProvider>
        <ContextProvider>
        <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/cart' component={Cart} />
           </Switch>
           </BrowserRouter>
        </ContextProvider>
       
        </TemplateProvider>
      
     
    </div>
  )
}

export default App
