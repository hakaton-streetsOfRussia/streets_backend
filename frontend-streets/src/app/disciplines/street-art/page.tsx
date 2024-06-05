import StreetArtDemoPath from '@/public/images/disciplines/street-art/street-art-demo.jpg'
import { DisciplinePageSkeleton } from '../_components/_page-skeleton'

import StreetArt2 from '@/public/images/disciplines/street-art/street-art-2.jpg'
import StreetArt3 from '@/public/images/disciplines/street-art/street-art-3.jpg'
import StreetArt4 from '@/public/images/disciplines/street-art/street-art-4.jpg'
import StreetArt5 from '@/public/images/disciplines/street-art/street-art-5.jpg'

const imagesPaths = [StreetArt2, StreetArt3, StreetArt4, StreetArt5]

const Title1Text = (
  <p>
    <span>Стрит-арт</span> — это разновидность современного урбанистического искусства. Бытует широкое заблуждение, что граффити является единственным
    проявлением стрит-арт. Однако, это не так, <span>граффити является лишь одним</span> из видов уличного искусства, но далеко не единственным.
  </p>
)

const Title2Text = (
  <p>
    <span>Разделение на стили</span> можно наблюдать, в основном, среди граффити: writing, bombing, tagging, bubble-letter, throw-up, character, wild
    style, 3D-style.Стрит-арт своеобразный способ выразить себя и своё творчество, а также самоутвердиться в обществе.
  </p>
)

export default function StreetArt() {
  return (
    <DisciplinePageSkeleton
      titleText={[Title1Text, Title2Text]}
      titleImagePath={StreetArtDemoPath}
      videoUrl="https://www.youtube.com/embed/9rzrFQdE7JM?si=hG1nT9l-jonCyJQG"
      imagesPaths={imagesPaths}
    />
  )
}
