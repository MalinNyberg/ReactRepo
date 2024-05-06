import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Contact} from "./Pages/Contact";
import {Layout} from "./Pages/Layout";
import {Portfolio} from "./Pages/Portfolio";
import {Resume} from "./Pages/Resume";



function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path= "/contact" element={<Contact/>}></Route>
            <Route path= "/portfolio" element={<Portfolio/>}></Route>
            <Route path= "/resume" element={<Resume/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

