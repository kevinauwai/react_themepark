import Section from '../../components/Section';
import Footer from '../../components/Footer';
import SwiperSection from '../../components/SwiperSection';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';
const Home = () => {
  return (
    <>
   <ReactPlayer src='https://www.youtube.com/embed/Gnx4XUvEd44?&autoplay=1' width="100%" height="600px" muted={true} playing={true} controls={true}/>
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