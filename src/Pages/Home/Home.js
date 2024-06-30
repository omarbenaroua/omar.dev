import "./Home.css"
import {About, Footer, Landing , Portfolio , Skills, Services} from '../../sections/index';
import {Container} from '../../components/index';

const Home = () => {
  return (
    <>
    <Landing/>
    <Container>
      <About/>
      <Services></Services>
      <Skills/>
      <Portfolio/>
    </Container>
    <Footer/>
    </>
  )
}

export default Home