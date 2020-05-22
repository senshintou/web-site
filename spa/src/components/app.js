import React from 'preact/compat';

import Header from './header';
import Home from './home';
import About from './about';
import Poricy from './poricy';
import Report from './report';
import Recruit from './recruit';
import Contact from './contact';

const App = () => {
  return (
    <div id="app">
      <Header />
      <Home />
      <About />
      <Poricy />
      <Report />
      <Recruit />
      <Contact />
    </div>
  );
};
export default App;
