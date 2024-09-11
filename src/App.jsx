import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" Component={Main} />
                <Route path="/basket" Component={Basket} />
                <Route path="/card/:id" Component={Card} />
                <Route path="/category/:id" Component={Category} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
