import Sidebar from "./components/sidebar.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from "./components/MainContent.tsx";
import ProductPage from "./components/ProductPage.tsx";

function App() {
    return (
        <>
            <Router>
                <div className='h-screen flex'>
                    <Sidebar/>

                    <div className="rounded w-full flex justify-between flex-wrap">
                        <Routes>
                            <Route path='/' element={<MainContent/>}/>
                            <Route path='/product/:id' element={<ProductPage/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    )
}

export default App
