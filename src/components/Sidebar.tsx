import GroupInfo from './GroupInfo'
import Info from './Info'

function Sidebar() {
  return (
    <section className='space-y-10 py-5 sm:py-10 lg:pr-10'>
      {/* Dummy data created by https://generatedata.com */}
      <GroupInfo
        title='Details*'
        childrenContainerClassName='max-lg:grid max-lg:grid-cols-2 max-xs:grid-cols-1 max-lg:space-y-0 gap-4 sm:gap-8'
      >
        <Info title='Address'>P.O. Box 325, 6219 Sagittis Avenue</Info>
        <Info title='Phone'>1-528-589-4226</Info>
        <Info title='Email'>feugiat.placerat@yahoo.couk</Info>
        <Info title='Nationality'>South Korea</Info>
      </GroupInfo>

      {/* Nothing here is reflecting my real actual skills */}
      <GroupInfo
        title='Skills**'
        childrenContainerClassName='max-lg:grid max-lg:grid-cols-2 max-xs:grid-cols-1 max-lg:space-y-0 gap-4 sm:gap-8'
      >
        <Info title='Performance optimization' percentage={80} />
        <Info
          title='Troubleshooting and solutions deployment'
          percentage={80}
        />
        <Info title='Analytical thinking skills' percentage={80} />
        <Info title='Software design and development' percentage={80} />
        <Info title='Coding and scripting' percentage={80} />
        <Info title='Daily-driving Linux' percentage={100} />
      </GroupInfo>

      {/* Nothing here is representing my real actual skills */}
      <GroupInfo
        title='Languages**'
        childrenContainerClassName='max-lg:grid max-lg:grid-cols-2 max-xs:grid-cols-1 max-lg:space-y-0 gap-4 sm:gap-8'
      >
        <Info title='Vietnamese' percentage={0} />
        <Info title='English' percentage={20} />
      </GroupInfo>
    </section>
  )
}

export default Sidebar
