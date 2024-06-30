import './About.css'
import {About, Footer} from '../../sections/index'
import { Container, LogoCover} from '../../components'

const about = () => {
  return (
    <>
    <LogoCover/>
    <Container>
      <About/>
    </Container>
    <Footer/>
    </>
  )
}
export default about