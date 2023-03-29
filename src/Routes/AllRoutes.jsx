import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import CreateBlog from '../Pages/CreateBlog';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/createblog' element={<CreateBlog/>}></Route>
        </Routes>
    );
}

export default AllRoutes;
