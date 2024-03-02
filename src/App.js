import './css/tailwind.css';
import Counter from './Counter';


const team1 = prompt('Enter name of team 1');
const team2 = prompt('Enter name of team 2');
let num = [team1, team2];
function App() {

  return (
    <div className="h-[100vh] w-[100vw] grid grid-cols-2">

      {
        num.map((teamName) => { return <Counter teamName={teamName} /> })
      }


    </div>
  );
}

export default App;
