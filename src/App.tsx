import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className='flex divide-gray-300 max-lg:flex-col max-lg:divide-y-2 lg:divide-x-2'>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </>
  )
}

export default App
