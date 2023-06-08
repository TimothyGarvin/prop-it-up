import './App.css';
import PersonCard from './components/PersonCard'

var people=[
  {'firstName':'Tim', 'lastName':'Garvin', 'age':19, 'hairColor':'Brown'},
  {'firstName':'Katherine', 'lastName':'Salzman', 'age':19, 'hairColor':'Blonde'},
  {'firstName':'Bobby', 'lastName':'Snyder', 'age':65, 'hairColor':'Black'},
  {'firstName':'John', 'lastName':'Morrison', 'age':41, 'hairColor':'Light Brown'},
]
function App() {
  return (
    <div className="App">
      {people.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
      })
      }
    </div>
  );
}

export default App;
