import React, { Fragment } from 'react';
import './App.css';
import { MainBanner } from './components/UI/MainBanner';
import { HeaderTop } from './components/UI/HeaderTop';
import { HeaderContent } from './components/UI/HeaderContent';
import { Features } from './components/UI/Features';
import { Promotions } from './components/UI/Promotions';
import { Categories } from './components/UI/Categories';
import { ProductCategory } from './components/Products/ProductCategory';

function App() {
  return (
    <Fragment>
      <MainBanner></MainBanner>
      <header className="header header--standard header--market-place-4" data-sticky="true">        
        <HeaderTop></HeaderTop>
        <HeaderContent></HeaderContent>
      </header>
      <div id="homepage-6">
        <Features></Features>
        <Promotions></Promotions>
        <Categories></Categories>
      </div>
      <div class="ps-section--gray">
        <div class="container">
          <ProductCategory></ProductCategory>
        </div>
      </div>
    </Fragment>  
  );
}

export default App;
