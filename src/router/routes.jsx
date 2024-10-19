import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Main from "../pages/Main"

export function MyRoutes(){
    return(<Router>
        <Routes>
            <Route exact path="/" element={<Main></Main>}></Route>
        </Routes>
    </Router>)
}