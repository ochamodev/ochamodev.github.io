import Image from 'next/image'
import siteInProgress from '/public/img/siteInProgress.png'
import Intro from './components/intro'
import SectionDivider from './components/section-divider'
import Projects from './components/projects'
import Skills from './components/skills'

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
      <Projects/>
      <Skills />
    </main>
  )
}
