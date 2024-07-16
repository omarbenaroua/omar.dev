import "./Home.css"
import {About, Landing , Portfolio , Skills, Services} from '../../sections/index';
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
    </>
  )
}

export default Home