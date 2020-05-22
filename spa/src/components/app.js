import React from 'preact/compat';

import Header from './header';
import Home from './home';
import About from './about';
import Policy from './policy';
import Report from './report';
import Recruit from './recruit';
import Contact from './contact';

const App = () => {
  return (
    <div id="app">
      <Header />
      <Home />
      <About />
      <Policy />
      <Report />
      <Recruit />
      <Contact />
    </div>
  );
};
export default App;
