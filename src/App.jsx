import './App.css'
import Header from './components/Header'
import ImageSlideshow from './components/ImageSlideshow'
import Introduction from './components/Introduction'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className="app">
      <Header />
      <ImageSlideshow />
      <Introduction />
      <SocialLinks />
    </div>
  )
}

export default App

