import Accordion from './components/Accordion';
import Search from './components/Search';

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
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}

export default App;
