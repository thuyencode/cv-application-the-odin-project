import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Header />
      <div className='flex divide-x-2 divide-gray-300'>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </>
  )
}

export default App
