import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./components/Profile";
import logo from './logo.svg';
import './App.css';
import NavComponent from "./components/NavComponent";
import {Route, Routes} from "react-router-dom";;



function App() {
    return (
        <div>
            <NavComponent />
            <section>
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/" element={<Profile />} />
                </Routes>
            </section>
        </div>
        // <h1 className="text-3xl font-bold underline">
        //   Hello world!
        // </h1>
    );
}

export default App;
