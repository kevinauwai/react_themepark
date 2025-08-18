import Section from '../../components/Section';
import Footer from '../../components/Footer';
import SwiperSection from '../../components/SwiperSection';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/u84hRUQlaio?si=KpyMLO4U58ipQmhA&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" autoplay allowfullscreen></iframe>
    <main>
      <Section title="facilities"/>
      <Section title="news"/>
      <Section title="hotel"/>
      <Section title="Ticket"/>
      <Section title="restaurant"/>
      {/* <SwiperSection/> */}
    </main>
    </>
  )
}

export default Home