import './Services.css'
import { ServicesCard, Title } from '../../components'
import infoServices from "../../Data/ServicesData"

function Services() {
    const dataServices = infoServices.map((info) => {
        return(
        <ServicesCard
        key = {info.id}
        img = {info.image}
        title = {info.title}
        text = {info.text}
        />)
    })
  return (
    <>
    <Title>My Services</Title>
    <div className="services">
        {dataServices}
    </div>
    </>
  )
}

export default Services