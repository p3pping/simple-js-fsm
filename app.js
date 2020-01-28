var readline = require('readline');
var Transition = require('./transition').Transition
var State = require('./state').State
var FSM = require('./fsm').FSM

var consolePrompt = readline.createInterface(process.stdin, process.stdout);
consolePrompt.setPrompt('Choose next state: ');
consolePrompt.prompt();






var counter = 0

function isCounterDivisibleBy2 () {
  return counter%2 == 0
}

function isDivisibleBy2(toDivide) {
  return toDivide%2 == 0
}

//Defind your state machine in json
let options = {
  initalState: 'first',
  states: [{
    name: 'first',
    transitions: [
      {
        condition: {
          testFunction: isCounterDivisibleBy2
        },
        moveTo: 'second'
      }
    ],
    onEnter: ()=>{console.log("Entering the first state")},
    beforeExit: ()=>{console.log("leaving the first state")}
  },
  {
    name: 'second',
    transitions: [
      {
        condition: {
          testFunction: isDivisibleBy2,
          params: [counter]
        },
        moveTo: 'first'
      }
    ],
    onEnter: ()=>{console.log("Entering the second state")},
    beforeExit: ()=>{console.log("leaving the second state")}
  }
  ]
}

//create your fsm
let fsm = new FSM(options)






//node input handling
consolePrompt.on('line', function(line) {
    counter += Number.parseInt(line)
    fsm.next()
    console.log(`Counter: ${counter} \r\nCurrent State: ${fsm.current().name}`)
    consolePrompt.prompt()
}).on('close',function(){
    process.exit(0);
});