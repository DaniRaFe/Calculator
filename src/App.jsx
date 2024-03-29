import {useState} from 'react'
import './App.css'
import Button from './components/Button';

const buttonsClasses = "btn btn-primary w-75";

function App() {
  
  const [operator, SetOperator] = useState('');
  const [number1, setNumber1] = useState('');
  const [clearScreen, setCleanScreen] = useState(false);
  const [screen, setScreen] = useState('0');

  const handleButtonClick = (e) => {
    const {value} = e.target;
    if (value === '.') {
      //if (screen.indexOf(value) !== -1) return; (una forma de no repetir e punto)
      if (screen.includes('.')) return; //(otra forma de no repetir el punto)
    }
  if (value === 'C') {
    setScreen('0');
    return
    }

//!--------------------------------------
console.log({number1});    
if(clearScreen) {
  //console.log('cambia screen');
      setScreen (value);
      setCleanScreen(false);
      return;
    }
    if (screen === '0' && value !== '.'){
      setScreen(value);
    }
    else {
    setScreen(`${screen}${value}`)
    }
  }

const handleDelButtonClick = () => {
  if (screen.length ===1) {
    setScreen('0');
    return;
  } else {
  setScreen(screen.slice(0, -1))
  }
}

const handleOperationButtonClick = (e) => {
  SetOperator(e.target.value);
      setNumber1(screen);
      setCleanScreen(true);
}

const handleEqualButtonClick = () => {
  const a = +number1;
  const b = +screen;
  switch (operator) {
    case '+':
      setScreen ((a+b).toString());
      break;
     case '-':
      setScreen ((a-b).toString());
      break;
    case '/':
      setScreen ((a/b).toString());
      break;
    case '*':
      setScreen ((a*b).toString());
      break;
      default:
        break;

  }
  
}

const buttonsInfo = [
  [
    {
      classes: buttonsClasses,
      value: 'C',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '/',
      handleClick: handleOperationButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '*',
      handleClick: handleOperationButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '-',
      handleClick: handleOperationButtonClick,
      style : {},
      rows: 1
    },
  ],
  [
    {
      classes: buttonsClasses,
      value: '7',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '8',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '9',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '+',
      handleClick: handleOperationButtonClick,
      style : {height:"80px"},
      rows: 2
    },
  ],
  [
    {
      classes: buttonsClasses,
      value: '4',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '5',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '6',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
  ],
  [
    {
      classes: buttonsClasses,
      value: '1',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '2',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '3',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '=',
      handleClick: handleEqualButtonClick,
      style : {height:  "80px"},
      rows: 2
    },
  ],
  [
    {
      classes: buttonsClasses,
      value: 'DEL',
      handleClick: handleDelButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '0',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
    {
      classes: buttonsClasses,
      value: '.',
      handleClick: handleButtonClick,
      style : {},
      rows: 1
    },
  ],
]

  return (
  <div className='app'>
    <h1 className='shadow-sm'>Calculator</h1>
    <table>
      {/*First row*/ }
      <tr>
        <td colSpan={4} style={{
          border: '1px solid black',
          textAlign: 'end'
          }}> 
        <h2>{screen}</h2> 
        </td>
      </tr>
      {/*Second row*/ }
      {
        buttonsInfo.map((row) => {
          return (
            <tr>
              {
                row.map((cell) => {
                  return (
                  <td rowSpan={cell.rows}>
                    <Button
                     classes={cell.classes}
                     value={cell.value}
                     handleClick={cell.handleClick}
                     style={cell.style}
                     />
                  </td>
                  )
                })
              }
            </tr>
          )
        })
      }
    </table>
   
  </div>
  )
}

export default App
