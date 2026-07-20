import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Subjects from "./components/Subjects";

import Features from "./components/Features";

import Footer from "./components/Footer";

function App(){

return(

<BrowserRouter>

<div className="bg-light">

<Navbar/>

<Hero/>

<Subjects/>

<Features/>

<Footer/>

</div>

</BrowserRouter>

)

}

export default App;
