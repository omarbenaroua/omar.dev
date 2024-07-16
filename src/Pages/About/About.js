import './About.css'
import {About} from '../../sections/index'
import { Container, LogoCover} from '../../components'

const about = () => {
  return (
    <>
    <LogoCover/>
    <Container>
      <About/>
    </Container>
    </>
  )
}
export default about