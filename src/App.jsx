import { Routes, Route } from 'react-router-dom';
import Layout from './ui/layout/Layout';
import HomePage from './ui/pages/home/Homepage';
import AboutPage from './ui/pages/about/AboutPage';
import ContactPage from './ui/pages/contact/ContactPage';
import NotFoundPage from './ui/pages/notFound/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App;