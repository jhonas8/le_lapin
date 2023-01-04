import {Fragment} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import IndexSignIn from '../pages/signin/index';
import IndexSignUp from '../pages/signup/index';





const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route path="/signin" element={<IndexSignIn />}/>
                <Route exact path="/signup" element={<IndexSignUp/>}/>
            </Routes>
        </Fragment>
    </BrowserRouter>

  );
};

export default RoutesApp;