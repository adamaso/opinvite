import './App.scss';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
const ReactRotatingText = require('react-rotating-text');

function App() {
  const roatingItems = ['flexible people', 'people who hate to plan', 'type b people with type a friends', 'people who get fomo']

  return (
    <div className='wrapper light'>
      <Header />
      <Hero />
      <Section className="rotating" type="diagonal">
        <h2 className="rotating-text">plans for<br /><ReactRotatingText className="rotating-text--bold" items={roatingItems} /></h2>
        <br />
        <a className='squiggle'>learn more</a>
      </Section>
    </div>
  );
}

export default App;
