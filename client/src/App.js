import './App.css';

import Signin from "./components/signin/Signin"
import Signup from "./components/signup/Signup"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import PopularProperties from "./components/popularProperties/PopularProperties"
import FeaturedProperties from "./components/featuredProperties/FeaturedProperties"
import NewsLetter from "./components/newsletter/NewsLetter"
import Footer from "./components/footer/Footer"
import Properties from "./components/properties/Properties"
import PropertyDetails from "./components/propertyDetails/PropertyDetails"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <Hero />
          <PopularProperties />
          <FeaturedProperties />
          <NewsLetter />
          <Footer />
          </>
          
        } />


        <Route path="/properties" element={<>
        <Navbar/>
        <Properties />
        <Footer />
        </>} />

        <Route path="/propertyDetails/:id" element={
          <>
          <Navbar />
          <PropertyDetails />
          <Footer />
          </>
        } />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
     
    </div>
  );
}

export default App;
