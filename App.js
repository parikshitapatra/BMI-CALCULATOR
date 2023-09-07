
import './App.css';
import React,{useState} from 'react';

function App() {
  //making state of our application
  const[weight,setWeight] =useState(0);
  const[Height,setHeight] =useState(0);
  const[bmi,setBmi] =useState('');
  const[message ,setMessage] =useState('');

  //logic
  let calcBmi = (e)=>{

    e.preventDefault();

    if(weight === 0 || Height === 0) 
    {
      alert("please enter your weight and height")
    }
    else{
      let bmi =(weight/(Height*Height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("your are underweight")

      }
      else if(bmi>=25 && bmi <30){
        setMessage("you are a healthy wight")

      }
      else{
        setMessage('you are overweight')
      }
    }

  }
  //reload
  let reload =()=>{
    window.location.reload()
  }

  return (
    <div className="App">

      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>

          <div>
            <label>Weight (ibs)</label>
            <input type="text" placeholder='Enter Weight Value' value={weight}  onChange={(e)=> setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (in)</label>
            <input type="text" placeholder='Enter Weight Value' value={Height}  onChange={(event)=> setHeight(event.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn  btn-outline' type='submit' onClick={reload}>Reload</button>

          </div>
          <div className='center'>
            <h3>Your BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>

      </div>

    </div>
  );
}

export default App;
