import React from 'react';
import Banner from '../../Components/Banner';
import CarouselGallery from '../../Components/CarouselGallery';
import EmerjencyNotice from '../../Components/EmerjencyNotice';
import Events from '../../Components/Events';
import Location from '../../Components/Location';
import Principal from '../../Components/Principal';
import StudentsCount from '../../Components/StudentsCount';
import StudentsStatistics from '../../Components/StudentsStatistics';
import TeachersInfo from '../../Components/TeachersInfo';
import Visitors from '../../Components/Visitors';
import Footer from '../../Shired/Footer';
import Navbar from '../../Shired/Navbar';
import "./Home.css"
const Home = () => {
     return (
          <div>
               <Navbar/>
               <EmerjencyNotice/>
               <Banner/>
               <Principal/>
               <Events/>
               <StudentsStatistics/>
               <CarouselGallery/>
               <StudentsCount/>
               <TeachersInfo/>
               <Visitors/>
               <Location/>
               <Footer/>
          </div>
     );
};

export default Home;