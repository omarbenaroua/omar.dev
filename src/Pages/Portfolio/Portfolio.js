import './Portfolio.css'
import {Portfolio , Footer} from '../../sections/index'
import { Container, LogoCover } from '../../components'

const portfolio = () => {
  return (
    <>
    <LogoCover/>
    <Container>
      <Portfolio/>
    </Container>
    <Footer/>
    </>
  )
}
export default portfolio