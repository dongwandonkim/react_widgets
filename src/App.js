// import { useState } from 'react';
// import Accordion from './components/Accordion';
// import Dropdown from './components/Dropdown';
import Translaste from './components/Translaste';
// import Search from './components/Search';

// const items = [
//   {
//     title: 'title 1',
//     content: 'desc 1',
//   },
//   {
//     title: 'title 2',
//     content: 'desc 2',
//   },
//   {
//     title: 'title 3',
//     content: 'desc 3',
//   },
// ];

// const options = [
//   {
//     label: 'color red',
//     value: 'red',
//   },
//   {
//     label: 'color blue',
//     value: 'blue',
//   },
//   {
//     label: 'color green',
//     value: 'green',
//   },
// ];

function App() {
  // const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      <Translaste />
    </div>
  );
}

export default App;
