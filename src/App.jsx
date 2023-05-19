import {Routes, Route, Link} from 'react-router-dom'
import SearchEngine from './components/SearchEngine'
import News from './components/News'
import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {
  return (
    <>
    <div style={{position: 'absolute', top: '0', right: '0'}}>
      <div style={{float:'right'}}><Link to="/"><br /><button id='btn1' style={{color: 'black'}} class="btn info">General Search</button></Link>  <Link to="/news"><button id='btn2' style={{color: 'black'}} class="btn info">News Search</button></Link></div>&nbsp;
      <WeatherCard />
    </div>
    <Routes>
    <Route path="/" element={<SearchEngine />} />
    <Route path="/news" element={<News />} />
    </Routes>
    </>
  )
}

export default App
