import React from "react";
import Home from "./Home";
import Hero from "./Hero";
import ContactUs from "./ContactUs";
import Product from "./Product";
import Service from "./Service";
import Galleary from "./Gallery";
import Offer from "./Offer";
import Bloge from "./Bloge";
import Review from "./Review";
import Certificates from "./Certificates";
import Feedbackform from "./Feedbackform";
import BussinessHours from "./BussinessHours";
import EnqForm from "./EnqForm";
import Appoinment from "./Appoinment";

const Layout = () => {
  return (
    <div>
      <Home />
      <Hero />
      <ContactUs />
      <Product />
      <Service/>
      <Offer/>
      <Bloge/>
      <Galleary/>
      <BussinessHours/>
      <Certificates/>
      <Feedbackform/>
      <Review/>
      
      <Appoinment/>
      
      <EnqForm/>
      
    </div>
  );
};

export default Layout;
