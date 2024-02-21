import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.jsx';
import MyDetail from './pages/MyDetail.jsx';
import UsersPage from './pages/UsersPage.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts/:id" element={<MyDetail />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
