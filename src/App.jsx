import React from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import SpecialOffers from './Components/SpecialOffers';
import Categories from './Components/Categories';
import MostPopular from './Components/MostPopular';
import Footer from './Components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[390px] flex flex-col items-center border-2">
        <Header />
        <SearchBar />
        <SpecialOffers />
        <Categories />
        <MostPopular />
        <Footer />
      </div>
    </div>
  );
}
