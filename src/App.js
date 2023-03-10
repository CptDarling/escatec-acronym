import './App.css';
import { FilterableAcronymTable } from './components/FilterableAcronymTable';

// const DATA = [
//   { 'name': 'First', 'category': 'Articles', 'description': 'This would be a description' },
//   { 'name': 'Second', 'category': 'Batteries', 'description': 'A description of batteries' },
//   { 'name': 'Third', 'category': 'Articles' },
// ]
const DATA = require('./Acronyms.json');

function App() {

  const acronyms = DATA.acronyms.sort((a, b) => {
    if (a.category === b.category) {
      return a.description < b.description ? -1 : 1;
    } else {
      return a.category < b.category ? -1 : 1;
    }
  });

  return (
    <FilterableAcronymTable acronyms={acronyms} />
  );
}

export default App;
