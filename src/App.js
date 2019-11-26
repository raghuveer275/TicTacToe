import React from 'react';
import './App.css';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let array = []
let check = []

const tictactoe = (id) => {
  let count = 0
  document.getElementById(id).disabled = true
  let matchArray = ['123', '456', '789', '147', '258', '369', '159', '357']
  if (array.length < 9) {
    array.push(id)
    check.push({ X: id })
    document.getElementById(id).innerHTML = 'X'
    let newArr = arr.filter(a => !array.includes(a))
    let other = newArr.includes(id + 1) ? (id + 1) : newArr[parseInt(Math.round(Math.random() * (newArr.length - 1)))]
    check.map(num => {
      num.X && count++
      if (count > 0) {
        matchArray.map(mar => {
          if (document.getElementById(mar[0]).innerHTML !== null && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[2]).innerHTML.length === 0) {
            other = mar[2]
          }
          else if (document.getElementById(mar[0]).innerHTML !== null && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML && document.getElementById(mar[1]).innerHTML.length === 0) {
            other = mar[1]
          }
          else if (document.getElementById(mar[1]).innerHTML !== null && document.getElementById(mar[1]).innerHTML === document.getElementById(mar[2]).innerHTML && document.getElementById(mar[0]).innerHTML.length === 0) {
            other = mar[0]
          }
          return null
        })
      }
      return null
    })
    if (other) {
      array.push(other)
      document.getElementById(other).disabled = true
      document.getElementById(other).innerHTML = 'O'
    }
  }
  matchArray.map(mar => {
    if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML) {
      document.getElementById('none').style.display = 'block'
      document.getElementById('noneText').style.display = 'block'
      document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML + ' WON')
    }
    return null
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
      <span id='none' style={{ display: 'none' }} onClick={() => window.location.reload()} />
      <span id='noneText' style={{ display: 'none' }} onClick={() => window.location.reload()} />
    </div>
  )
}

export default App;
