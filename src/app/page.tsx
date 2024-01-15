import Image from 'next/image'
import siteInProgress from '/public/img/siteInProgress.png'
import Intro from './components/intro'
import SectionDivider from './components/section-divider'

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
    </main>
  )
}
