import './App.css';
import { FilterableAcronymTable } from './components/FilterableAcronymTable';

const DATA = [
  { 'name': 'First', 'category': 'Articles', 'description': 'This would be a description' },
  { 'name': 'Second', 'category': 'Batteries', 'description': 'A description of batteries' },
  { 'name': 'Third', 'category': 'Articles' },
]

function App() {

  const acronyms = DATA.sort((a, b) => {
    if (a.category === b.category) {
      return a.description < b.description ? -1 : 1;
    } else {
      return a.category < b.category ? -1 : 1;
    }
  });

  return (
    <>
      <div>
        <a href='/'>Home</a>
      </div>
      <FilterableAcronymTable acronyms={acronyms} />
    </>
  );
}

export default App;
