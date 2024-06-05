import { DisciplinePageSkeleton } from '../_components/_page-skeleton'

import img2 from '@/public/images/disciplines/parkour/9JxN83iHgEo 1-1.jpg'
import img1 from '@/public/images/disciplines/parkour/9JxN83iHgEo 1-2.jpg'
import img3 from '@/public/images/disciplines/parkour/9JxN83iHgEo 1.jpg'
import img4 from '@/public/images/disciplines/parkour/S2CZEuLUtG4 1-1.jpg'
import img5 from '@/public/images/disciplines/parkour/S2CZEuLUtG4 1.jpg'

const Title1Text = (
  <p>
    Паркур — искусство рационального преодоления препятствий и перемещения по городу из точки А в точку Б. В нем человек преодолевает физические
    препятствия (стены, заборы, дома и т.д.), при помощи возможностей своего тела. При этом препятствия он преодолевает как можно быстрее и
    эффективнее (это означает, что он не делает движений, которые отнимают слишком много энергии и время).
  </p>
)

const Title2Text = (
  <p>
    Паркур не просто физические усилия, техника и набор элементов передвижения, а ещё эмоциональный и духовный смысл. Мы играем и получаем
    удовольствие от движения. Говоря о препятствиях, мы говорим не только о физических, но и психологических преградах. Паркур учит быть сильным, быть
    полезным.
  </p>
)

const imagesPaths = [img2, img3, img4, img5]

export default function Parkour() {
  return (
    <DisciplinePageSkeleton
      titleText={[Title1Text, Title2Text]}
      titleImagePath={img1}
      videoUrl="https://www.youtube.com/embed/9rzrFQdE7JM?si=hG1nT9l-jonCyJQG"
      imagesPaths={imagesPaths}
    />
  )
}
