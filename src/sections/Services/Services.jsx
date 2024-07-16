import './Services.css'
import { ServicesCard, Title } from '../../components'
import infoServices from "../../Data/ServicesData"
import { useRef } from 'react'

function Services() {
    const ref = useRef(null)
  const scroll = () => {
    ref.current.scrollIntoView({behavior: "smooth",block: "start", inline: "nearest"});
  }
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
    <Title onClick={scroll}>My Services</Title>
    <div className="services" ref={ref}>
        {dataServices}
    </div>
    </>
  )
}

export default Services