import { News } from './_components/News'
import { PageMap } from './_components/PageMap'
import { Title } from './_components/Title'

export default function Home() {
  return (
    <main>
      <Title videoUrl={'https://www.youtube.com/embed/9rzrFQdE7JM?si=hG1nT9l-jonCyJQG'} />
      <PageMap />
      <News />
    </main>
  )
}
