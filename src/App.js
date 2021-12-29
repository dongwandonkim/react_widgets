import Accordion from './components/Accordion';

const items = [
  {
    title: 'title 1',
    content: 'desc 1',
  },
  {
    title: 'title 2',
    content: 'desc 2',
  },
  {
    title: 'title 3',
    content: 'desc 3',
  },
];

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
