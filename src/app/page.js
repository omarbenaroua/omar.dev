import Banner from "./_components/Banner"
import About from "./_components/About"
import Skills from "./_components/Skills"
import Portfolio from "./_components/Portfolio"
import Services from "./_components/Services"
import Stats from "./_components/Stats"
import Contact from "./_components/Contact"

const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Stats/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default Home
