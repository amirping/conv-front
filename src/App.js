import React,{useState} from 'react';
import { service_1_conv, service_2_conv, service_3_conv } from './service/api'
import './App.css';

function App() {

  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [result, setResult] = useState(0)
  const [toM, setToM] = useState(0)

  const conv_sv1 = () => {
    console.log(from,to,quantity)
    service_1_conv(quantity,from,to).then(response => {
      if(response.status){
        setResult(response.value)
      }
      else {
        alert(response.message)
      }
    }).catch(error => {
      alert(error.message)
    })
  }
  const conv_sv2 = () => {
    console.log(from,to,quantity)
    service_2_conv(quantity,toM).then(response => {
      if(response.status){
        setResult(response.value)
      }
      else {
        alert(response.message)
      }
    }).catch(error => {
      alert(error.message)
    })
  }
  const conv_sv3 = () => {
    console.log(from,to,quantity)
    service_3_conv(quantity,from,to).then(response => {
      if(response.status){
        setResult(response.value)
      }
      else {
        alert(response.message)
      }
    }).catch(error => {
      alert(error.message)
    })
  }


  return (
    <div className="main">
      <div className="service-1">
        <label>
          quantity
          <input placeholder='quantity' value={quantity} onChange={(evt) => {setQuantity(evt.target.value)}}/>
        </label>
        <label>
          from
          <select onChange={(evt) => setFrom(evt.target.value)}>
            <option value='l'>l</option>
            <option value='dl'>dl</option>
            <option value='cl'>cl</option>
            <option value='ml'>ml</option>
          </select>
        </label>
        <label>
          To
          <select onChange={(evt) => setTo(evt.target.value)}>
            <option value='l'>l</option>
            <option value='dl'>dl</option>
            <option value='cl'>cl</option>
            <option value='ml'>ml</option>
          </select>
        </label>
        <button onClick={() => conv_sv1()}>convert</button>
      </div>
      <div className="service-2">
        <label>
          quantity
          <input placeholder='quantity' value={quantity} onChange={(evt) => {setQuantity(evt.target.value)}}/> (ml)
        </label>
        <label>
          from
          <select onChange={(evt) => setFrom(evt.target.value)}>
            <option value='ml'>ml</option>
          </select>
        </label>
        <label>
          To
          <select onChange={(evt) => setToM(evt.target.value)}>
            <option value='sucre'>sucre</option>
            <option value='farine ordinaire'>farine</option>
            <option value='maizena'>maizena</option>
            <option value='riz'>riz</option>
            <option value='couscous'>couscous</option>
            <option value='cacao'>cacao</option>
            <option value='amande poudre'>amande poudre</option>
            <option value='noix de coco rapee'>noix de coco rapee</option>
          </select>
          (g)
        </label>
        <button onClick={() => conv_sv2()}>convert</button>
      </div><div className="service-3">
        <label>
          quantity
          <input placeholder='quantity' value={quantity} onChange={(evt) => {setQuantity(evt.target.value)}}/>
        </label>
        <label>
          from
          <select onChange={(evt) => setFrom(evt.target.value)}>
            <option value='humain'>humain</option>
            <option value='cl'>cl</option>
            <option value='ml'>ml</option>
          </select>
        </label>
        <label>
          To
          <select onChange={(evt) => setTo(evt.target.value)}>
            <option value='humain'>humain</option>
            <option value='cl'>cl</option>
            <option value='ml'>ml</option>
          </select>
        </label>
        <button onClick={() => conv_sv3()}>convert</button>
      </div>
      <input value={result} readOnly/>
    </div>
  );
}

export default App;
