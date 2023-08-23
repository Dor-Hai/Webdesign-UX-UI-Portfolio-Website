import './App.css';

// components
import Section from './components/Section';
import Profile from './components/Profile';
import Hero from './components/Hero';
import PortfolioItem from './components/PortfolioItem';
import Contact from './components/Contact';

// import images
import treetops from './images/treetops.png';
import iris_dror from './images/iris-dror.png';
import smartmoves from './images/smart-moves.png';
import nehama_dror from './images/nehama-dror.png';

const projects = [
  {
    id: 1,
    title: 'Treetops',
    description: 'A Website Design for an Insurance Counseling Agency',
    image: treetops,
    url: 'https://treetop-ins.co.il'
  },
  {
    id: 2,
    title: 'Iris Dror',
    description: 'A Website Design for a Senior lecturer in Economics',
    image: iris_dror,
    url: 'https://irisdror.co.il'
  },
  {
    id: 3,
    title: 'Smartmovesi',
    description: 'A Landing Page Design for a gymnastic instructor',
    image: smartmoves,
    url: 'https://smartmoves.co.il/landing/'
  },
  {
    id: 4,
    title: 'Nehama Dror',
    description: 'A Website Design for a Lawyer',
    image: nehama_dror,
    url: 'https://drorn-law.co.il/'
  }
]

function App() {
  return (
    <div className="App">
      <Section>
        <Profile />
      </Section>
      <Section grey="grey">
        <Hero />
      </Section>
      <Section>
        <p className='title'>My Works</p>
      </Section>
      {projects.map(project => (
        <Section key={project.id} grey={!(project.id % 2) ? 'grey' : ''}>
          <PortfolioItem 
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        </Section>
      ))}
      <Section>
        <p className='title'>Contact me</p>
      </Section>
      <Section>
        <Contact />
      </Section>
    </div>
  );
}

export default App;
