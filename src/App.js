import { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Translaste from './components/Translaste';
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';

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

const options = [
  {
    label: 'color red',
    value: 'red',
  },
  {
    label: 'color blue',
    value: 'blue',
  },
  {
    label: 'color green',
    value: 'green',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translaste />
      </Route>
    </div>
  );
}

export default App;
