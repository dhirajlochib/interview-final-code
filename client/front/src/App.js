import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import ProtectedRoute from './services/protectedRoute.js';
import OpenRoute from './services/openRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={
          <OpenRoute>
            <Login />
          </OpenRoute>
        } />
        <Route path="/register" element={
          <OpenRoute>
            <Register />
          </OpenRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
