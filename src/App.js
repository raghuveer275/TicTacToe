import React, { Component } from 'react'
import './App.scss';

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let matchArray = ['123', '456', '789', '147', '258', '369', '159', '357']
let array = []
let check = []
let count = 0

export class App extends Component {

  easy = (id) => {
    this.setState({ reset: true })
    count++
    document.getElementById(id).disabled = true
    if (array.length < 9) {
      array.push(id)
      document.getElementById(id).innerHTML = 'X'
      let newArr = arr.filter(a => !array.includes(a))
      let other = newArr[parseInt(Math.round(Math.random() * (newArr.length - 1)))]
      for (let i = 0; i < matchArray.length; i++) {
        let mar = matchArray[i]
        let a = document.getElementById(mar[0]).innerHTML
        let b = document.getElementById(mar[1]).innerHTML
        let c = document.getElementById(mar[2]).innerHTML
        if (a === 'O' && a === b && c.length === 0) {
          other = mar[2]
          break;
        }
        else if (a === 'O' && a === c && b.length === 0) {
          other = mar[1]
          break;
        }
        else if (b === 'O' && b === c && a.length === 0) {
          other = mar[0]
          break;
        }
        else if (b === 'O' && b === a && c.length === 0) {
          other = mar[2]
          break;
        }
        else if (c === 'O' && c === a && b.length === 0) {
          other = mar[1]
          break;
        }
        else if (c === 'O' && c === b && a.length === 0) {
          other = mar[0]
          break;
        }
      }
      if (other) {
        array.push(other)
        document.getElementById(other).disabled = true
        document.getElementById(other).innerHTML = 'O'
      }
    }
    if (array.length > 8) {
      document.getElementById('none').style.display = 'block'
      document.getElementById('noneText').style.display = 'block'
      document.getElementById('noneText').innerHTML = 'DRAW'
    }
    matchArray.map(mar => {
      if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML) {
        document.getElementById('none').style.display = 'block'
        document.getElementById('noneText').style.display = 'block'
        document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML === 'O' && 'LOSER')
      }
      return null
    })
    matchArray.map(mar => {
      if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML) {
        document.getElementById('none').style.display = 'block'
        document.getElementById('noneText').style.display = 'block'
        document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML === 'X' ? 'WINNER' : 'LOSER')
      }
      return null
    })
  }

  hard = (id) => {
    document.getElementById(id).disabled = true
    if (array.length < 9) {
      array.push(id)
      check.push({ X: id })
      document.getElementById(id).innerHTML = 'X'
      let newArr = arr.filter(a => !array.includes(a))
      let other = newArr.includes(5) ? 5 : newArr[parseInt(Math.round(Math.random() * (newArr.length - 1)))]
      let count = 0
      check.map(num => {
        num.X && count++
        if (count > 1) {
          for (let i = 0; i < matchArray.length; i++) {
            let mar = matchArray[i]
            if (document.getElementById(mar[0]).innerHTML.length !== 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[2]).innerHTML.length === 0) {
              other = mar[2]
              break;
            }
            else if (document.getElementById(mar[0]).innerHTML.length !== 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML && document.getElementById(mar[1]).innerHTML.length === 0) {
              other = mar[1]
              break;
            }
            else if (document.getElementById(mar[1]).innerHTML.length !== 0 && document.getElementById(mar[1]).innerHTML === document.getElementById(mar[2]).innerHTML && document.getElementById(mar[0]).innerHTML.length === 0) {
              other = mar[0]
              break;
            }
            else if (document.getElementById(mar[1]).innerHTML.length !== 0 && document.getElementById(mar[1]).innerHTML === document.getElementById(mar[0]).innerHTML && document.getElementById(mar[2]).innerHTML.length === 0) {
              other = mar[2]
              break;
            }
            else if (document.getElementById(mar[2]).innerHTML.length !== 0 && document.getElementById(mar[2]).innerHTML === document.getElementById(mar[0]).innerHTML && document.getElementById(mar[1]).innerHTML.length === 0) {
              other = mar[1]
              break;
            }
            else if (document.getElementById(mar[2]).innerHTML.length !== 0 && document.getElementById(mar[2]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML.length === 0) {
              other = mar[0]
              break;
            }
          }
        }
        return null
      })
      if (other) {
        array.push(other)
        document.getElementById(other).disabled = true
        document.getElementById(other).innerHTML = 'O'
      }
    }
    if (array.length > 8) {
      document.getElementById('none').style.display = 'block'
      document.getElementById('noneText').style.display = 'block'
      document.getElementById('noneText').innerHTML = 'DRAW'
    }
    matchArray.map(mar => {
      if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML) {
        document.getElementById('none').style.display = 'block'
        document.getElementById('noneText').style.display = 'block'
        document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML === 'O' && 'LOSER')
      }
      return null
    })
    matchArray.map(mar => {
      if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML) {
        document.getElementById('none').style.display = 'block'
        document.getElementById('noneText').style.display = 'block'
        document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML === 'X' ? 'WINNER' : 'LOSER')
      }
      return null
    })
  }

  impossible = (id) => {
    count++
    document.getElementById(id).disabled = true
    if (array.length < 9) {
      array.push(id)
      document.getElementById(id).innerHTML = 'X'
      let newArr = arr.filter(a => !array.includes(a))
      let other = newArr[parseInt(Math.round(Math.random() * (newArr.length - 1)))]
      let check = other
      if (count === 1) {
        other = newArr.includes(5) ? 5 : 1
      }
      else if (count === 2) {
        let secondMatch = ['123', '456', '789', '147', '258', '369', '159', '357', '124', '236', '478', '689', '238', '467', '149', '347', '359']
        for (let i = 0; i < secondMatch.length; i++) {
          let mar = secondMatch[i]
          let a = document.getElementById(mar[0]).innerHTML
          let b = document.getElementById(mar[1]).innerHTML
          let c = document.getElementById(mar[2]).innerHTML
          if (a === 'X' && a === b && c.length === 0) {
            other = mar[2]
            break;
          }
          else if (a === 'X' && a === c && b.length === 0) {
            other = mar[1]
            break;
          }
          else if (b === 'X' && b === c && a.length === 0) {
            other = mar[0]
            break;
          }
          else if (b === 'X' && b === a && c.length === 0) {
            other = mar[2]
            break;
          }
          else if (c === 'X' && c === a && b.length === 0) {
            other = mar[1]
            break;
          }
          else if (c === 'X' && c === b && a.length === 0) {
            other = mar[0]
            break;
          }
        }
      }
      else if (count > 2) {
        for (let i = 0; i < matchArray.length; i++) {
          let mar = matchArray[i]
          let a = document.getElementById(mar[0]).innerHTML
          let b = document.getElementById(mar[1]).innerHTML
          let c = document.getElementById(mar[2]).innerHTML
          if (a === 'O' && a === b && c.length === 0) {
            other = mar[2]
            break;
          }
          else if (a === 'O' && a === c && b.length === 0) {
            other = mar[1]
            break;
          }
          else if (b === 'O' && b === c && a.length === 0) {
            other = mar[0]
            break;
          }
          else if (b === 'O' && b === a && c.length === 0) {
            other = mar[2]
            break;
          }
          else if (c === 'O' && c === a && b.length === 0) {
            other = mar[1]
            break;
          }
          else if (c === 'O' && c === b && a.length === 0) {
            other = mar[0]
            break;
          }
        }

        if (check === other) {
          for (let i = 0; i < matchArray.length; i++) {
            let mar = matchArray[i]
            let a = document.getElementById(mar[0]).innerHTML
            let b = document.getElementById(mar[1]).innerHTML
            let c = document.getElementById(mar[2]).innerHTML

            if (a === 'X' && a === b && c.length === 0) {
              other = mar[2]
              break;
            }
            else if (a === 'X' && a === c && b.length === 0) {
              other = mar[1]
              break;
            }
            else if (b === 'X' && b === c && a.length === 0) {
              other = mar[0]
              break;
            }
            else if (b === 'X' && b === a && c.length === 0) {
              other = mar[2]
              break;
            }
            else if (c === 'X' && c === a && b.length === 0) {
              other = mar[1]
              break;
            }
            else if (c === 'X' && c === b && a.length === 0) {
              other = mar[0]
              break;
            }
          }
        }
      }
      if (other) {
        array.push(other)
        document.getElementById(other).disabled = true
        document.getElementById(other).innerHTML = 'O'
      }
    }
    if (array.length > 8) {
      document.getElementById('none').style.display = 'block'
      document.getElementById('noneText').style.display = 'block'
      document.getElementById('noneText').innerHTML = 'DRAW'
    }
    matchArray.map(mar => {
      if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML) {
        document.getElementById('none').style.display = 'block'
        document.getElementById('noneText').style.display = 'block'
        document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML === 'O' && 'LOSER')
      }
      return null
    })
    matchArray.map(mar => {
      if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML) {
        document.getElementById('none').style.display = 'block'
        document.getElementById('noneText').style.display = 'block'
        document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML === 'X' ? 'WINNER' : 'LOSER')
        console.log('Whaaaaaaaaaaaaat', document.getElementById(mar[0]).innerHTML, mar)
      }
      return null
    })
  }

  two = (id) => {
    this.setState({ reset: true })
    count++
    document.getElementById(id).disabled = true
    if (array.length < 9) {
      array.push(id)
      if (array.length % 2 === 0) {
        document.getElementById(id).innerHTML = 'O'
      }
      else {
        document.getElementById(id).innerHTML = 'X'
      }
    }
    if (array.length > 8) {
      document.getElementById('none').style.display = 'block'
      document.getElementById('noneText').style.display = 'block'
      document.getElementById('noneText').innerHTML = 'DRAW'
    }
    matchArray.map(mar => {
      if (document.getElementById(mar[0]).innerHTML.length > 0 && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[1]).innerHTML && document.getElementById(mar[0]).innerHTML === document.getElementById(mar[2]).innerHTML) {
        document.getElementById('none').style.display = 'block'
        document.getElementById('noneText').style.display = 'block'
        document.getElementById('noneText').innerHTML = (document.getElementById(mar[0]).innerHTML === 'X' ? 'X WON' : 'O WON')
      }
      return null
    })

  }
  handleSelect = (event) => {
    this.setState({ selected: event.target.value })
    this.reset()
  }
  state = {
    selected: 'easy',
    reset: false
  }
  tictactoe = (item) => {
    this.state.selected === 'easy' ? this.easy(item) : this.state.selected === 'hard' ? this.hard(item) : this.state.selected === 'impossible' ? this.impossible(item) : this.two(item)
  }
  reset = () => {
    array = []
    check = []
    count = 0
    document.getElementById('none').style.display = 'none'
    document.getElementById('noneText').style.display = 'none'
    arr.map(id => {
      document.getElementById(id).innerHTML = ''
      document.getElementById(id).disabled = false
    })
  }
  render() {
    return (
      <div className={this.state.selected}>
        <span className='header'>Tic Tac Toe</span>
        <div className='outer'>
          <div className='grid-box'>
            {arr.map(item =>
              <button onClick={() => this.tictactoe(item)} id={item} key={item} />
            )}
          </div>
        </div>
        <div className='my-flex'>
          <select value={this.state.selected} className='selective' onChange={this.handleSelect}>
            <option value='easy'>Easy</option>
            <option value='hard'>Hard</option>
            <option value='impossible'>Impossible</option>
            <option value='two'>Two Players</option>
          </select>
          <button className='refresh' onClick={this.reset}>RESET</button>
        </div>
        <span id='none' style={{ display: 'none' }} onClick={this.reset} />
        <span id='noneText' style={{ display: 'none' }} onClick={this.reset} />
        <i className='watermark'>Raghuveer Bharadwaj</i>
      </div>
    )
  }
}

export default App