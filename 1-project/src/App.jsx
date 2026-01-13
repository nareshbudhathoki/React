import './App.css'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'

function App(){
  let obj = {
    username: "ken",
    age:33
  }
  
  return (
    <>
    <Card username="Billionare Club" someobj = {obj}></Card>
    <Card username={"Welcome to one Percent Club"}></Card>
    </>
  )
}


export default App
