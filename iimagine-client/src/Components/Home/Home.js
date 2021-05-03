import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../ShareComponents/Footer/Footer';
import AboutUs from './AboutUs/AboutUs';
import Header from './Header/Header';
import Services from '../Services/Services';
import SomeProjects from './SomeProjects/SomeProjects';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <SomeProjects />
            <AboutUs />
            <ContactUs/>
            <Footer />
            <MessengerCustomerChat pageId="101377385290317" appId="116888296978821" />
        </>
    );
};

export default Home;