import './App.css'
import Home from './components/softcom-home/Softcom'
import Funcionario from './components/funcionario-page/Funcionario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionario-page" element={<Funcionario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App