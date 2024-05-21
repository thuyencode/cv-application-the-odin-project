import GroupInfo from './GroupInfo'
import Info from './Info'

function Sidebar() {
  return (
    <section className='w-1/5 min-w-72 space-y-10 py-10 pr-10'>
      {/* Dummy data created by https://generatedata.com */}
      <GroupInfo title='Details*'>
        <Info title='Address'>P.O. Box 325, 6219 Sagittis Avenue</Info>
        <Info title='Phone'>1-528-589-4226</Info>
        <Info title='Email'>feugiat.placerat@yahoo.couk</Info>
        <Info title='Nationality'>South Korea</Info>
      </GroupInfo>

      {/* Nothing here is representing my real actual skills */}
      <GroupInfo title='Skills**'>
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
      <GroupInfo title='Languages**'>
        <Info title='Vietnamese' percentage={0} />
        <Info title='English' percentage={20} />
      </GroupInfo>
    </section>
  )
}

export default Sidebar
