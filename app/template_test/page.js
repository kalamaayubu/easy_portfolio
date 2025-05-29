import AboutCenter from "@/components/sectionTemplates/about/AboutCenter"
import FooterCenter from "@/components/sectionTemplates/footer/FooterCenter"
import HeroCenter from "@/components/sectionTemplates/hero/HeroCenter"
import NavBar from "@/components/sectionTemplates/navBar/NavBar"
import ProjectsGrid from "@/components/sectionTemplates/projects/ProjectsGrid"

const TemplateTestPage = () => {
  return (
    <div className="min-h-screen">
        <NavBar/>
        <HeroCenter/>
        <AboutCenter/>
        <ProjectsGrid/>
        <FooterCenter/>
    </div>
  )
}

export default TemplateTestPage