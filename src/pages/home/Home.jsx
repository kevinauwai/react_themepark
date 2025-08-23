import Section from '../../components/Section';
import Footer from '../../components/Footer';
import SwiperSection from '../../components/SwiperSection';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
   <iframe width="100%" height="600" src="https://www.youtube.com/embed/Gnx4XUvEd44?si=G-L1erEWVtzgRp72&amp;start=10&autoplay=1&loop=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
   <Container className='home_container'>
      {/* <Section title="facilities"/> */}
      <Section title="news"/>
      <Section title="products"/>
      <Section title="hotel"/>
      <Section title="tickets"/>
      <Section title="restaurants"/> 
      {/* <Section title="hotel"/>
      <Section title="Ticket"/>
      <Section title="restaurant"/> */}
      {/* <SwiperSection/> */}
    </Container>
    </>
  )
}

export default Home