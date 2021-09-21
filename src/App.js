import React, {useState} from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Nav from './components/Nav'
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Blog from './pages/blog';
import Contact from './pages/contact';
import './App.css';

 // Create a client
 const queryClient = new QueryClient()


function App() {
  const [page, setPage] = useState('home')
  return (
    <QueryClientProvider client={queryClient}>
      <div className="cotainer-fluid app-container">
        <div className="nav-bar">
          <Nav setPage={setPage}/>
        </div>

        <div className="contents">
          {page === 'home' && (<Home />)}
          {page === 'about' && (<About />)}
          {page === 'projects' && (<Projects />)}
          {page === 'blog' && (<Blog />)}
          {page === 'contact' && (<Contact />)}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
