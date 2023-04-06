import Header from './Layouts/header'
import Top from './Layouts/top'
import Home from './Home/index'
import Buy from './Buy/index'
import Person from './Person/index'
import { BrowserRouter,Route, Routes } from "react-router-dom"
function Screen() {
  return (
    <div className='site'>
        <Top/>
        <main style={{
            maxWidth:1600,
            margin:'auto',
            backgroundColor:'#E5E5E5',
            minHeight:1000,
            paddingTop:'40px'
        }}>
          {/* //cấu hình route */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="buy" element={<Buy />} />
              <Route path="train" element={<Buy />} />
              <Route path="connect" element={<Buy />} />
              <Route path="person" element={<Person />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Header/>
    </div>
  );
}

export default Screen;

