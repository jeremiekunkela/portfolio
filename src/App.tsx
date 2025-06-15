import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

import './index.css';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <div className="App">
            <Header />
            <Sidebar />
            <main className="main">
              <div className="content">
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <About />
                      <Timeline />
                      <Skills />
                      <Projects />
                      <Blog />
                      <Contact />
                    </>
                  } />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                </Routes>
              </div>
              <Footer />
            </main>
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;