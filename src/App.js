import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import { ProductArray } from './Helper';
import './App.css';

const App = () => {
 
  return (
    <>
     <Header/>
     <div className='program_section'>

       {ProductArray.map( (prod) => (
         <Card 
         image={prod.imgSrc} 
         price={prod.price} 
         productName={prod.product} />
         
         )
       )}
       {ProductArray.map( (prod) => (
         <Card 
         image={prod.imgSrc} 
         price={prod.price} 
         productName={prod.product} />
         
         )
       )}
      {/* <Card image={ProdImageone} price={1299} productName="Shoes"/>
      <Card image={ProdImageTwo} price={899} productName="Makeup Kit"/>
      <Card image={ProdImageThree} price={799} productName="Wrist Watch"/>
      <Card image={ProdImageFour} price={999} productName="Ear Pods"/>
      */}
     </div>
     <Footer/>

    </>
  );
};

export default App;
