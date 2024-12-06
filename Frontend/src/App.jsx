import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contacts from './components/Contact/Contacts';
import { Toaster } from "react-hot-toast";
import { useAuth } from "./components/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth(); // Use context for authUser

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/course" 
            element={authUser ? <Courses /> : <Navigate to="/signup" />} 
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
