import React,{useEffect,useState} from 'react';
import './App.css';
import First from './Components/First';

function App() {
  const [name,setName]=useState("Chitrang");
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = React.useState(null);
     
  useEffect(() => {
    fetch('https://backend-development.wbmyselfhealth.com/test/getAllPatients')
    .then(response => response.json())
    .then(json => setData(json))
 }, []);

  return (
    <div className="App">
      <div style={{margin:"10px"}} >
      {
        data.map((i) =>
        <li>{i.account.firstName}</li> )
      }
      </div>
     
      <First  name="Hi from App.js">
        <button>Button as Child from App.js</button>
      </First>
    </div>
   
  );
}

export default App;
