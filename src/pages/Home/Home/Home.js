import React from 'react';
import Footer from '../../../components/shared/Footer/Footer';
import Header from '../../../components/shared/Header/Header';
import Blogs from '../Blogs/Blogs';
import Faq from '../Faq/Faq';
import HeroBanner from '../HeroBanner/HeroBanner';
import Products from '../Products/Products';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Header></Header>
            <HeroBanner></HeroBanner>
            <Products></Products>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Blogs></Blogs>
            <Footer></Footer>
        </>
    );
};

export default Home;