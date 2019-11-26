import React from 'react';
import './App.css';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let array = []

const tictactoe = (id) => {
  document.getElementById(id).disabled = true
  if (array.length < 9) {
      array.push(id)
      document.getElementById(id).innerHTML = 'X'
      let newArr = arr.filter(a => !array.includes(a))
      let other = newArr[parseInt(Math.round(Math.random() * (newArr.length -1)))]
      if (other) {
        array.push(other)
        document.getElementById(other).disabled = true
        document.getElementById(other).innerHTML = 'O'
      }
  }
  let matchArray = ['123', '456', '789', '147', '258', '369', '159', '357']
  matchArray.map(mar => {
    if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML)
    {
      document.getElementById('none').style.display = 'block'
    document.getElementById('noneText').style.display = 'block'
    document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML + ' WON')
  }
  })
}
function App() {
  return (
    <div>
      <h1>My Tic Tac Toe Game</h1>
      <div className='grid-box'>
        {arr.map(item =>
          <button onClick={() => tictactoe(item)} id={item} key={item} />
        )}
      </div>
      <button className='refresh' onClick={() => window.location.reload()}>RESET GAME</button>
      <span id='none' style={{display: 'none'}} onClick={()=>window.location.reload()} />
      <span id='noneText' style={{display: 'none'}} onClick={()=>window.location.reload()}/>
    </div>
  )
}

export default App;
