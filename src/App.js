import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ul>
        <li>hello</li>
        <li>Hi</li>
        <li>welcome</li>
       </ul>
      </header>
    </div>
  );
}
function Sample(){
  return(
    <h1 style={colors}>{greeting}</h1>
  )
}

let greeting;
const date =new Date();
const hours=date.getHours();
const colors={
  color:""
}
if(hours<12)
{
  greeting="Good morning";
  colors.color="red";

}
else if (hours <18)
{
  greeting="Good evening";
  colors.color="green";


}
else {
  greeting="Good night";
  colors.color="yellow";

}


export default Sample;
