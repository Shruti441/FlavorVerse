import {Routes, Route, Outlet} from 'react-router-dom'

import Home from './pages/home';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RecipeDetail from './pages/RecipeDetail';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
    <div className="bg-black">
      <Routes>
        <Route path="/" elements={<Layout />} />
        <Route index elements={<Home />} />
        <Route path="Recipes/:id" elements={<RecipeDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
