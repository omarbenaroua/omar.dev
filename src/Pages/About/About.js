import './About.css'
import {About , Services} from '../../sections/index'
import {LogoCover} from '../../components'

const about = () => {
  return (
    <>
    <LogoCover/>
      <About/>
      <Services/>
    </>
  )
}
export default about