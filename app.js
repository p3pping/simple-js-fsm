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

function isCounterDivisibleBy7 () {
  return counter%7 == 0
}

function isCounterDivisibleBy10 () {
  return counter%10 == 0
}

let firstState = new State("first", new Transition("second", isCounterDivisibleBy2), new Transition("second", isCounterDivisibleBy7))
let secondState = new State("second", new Transition("first", isCounterDivisibleBy10))

let fsm = new FSM(firstState, secondState)







consolePrompt.on('line', function(line) {
    counter += Number.parseInt(line)
    fsm.next()
    console.log(`Counter: ${counter} \r\nCurrent State: ${fsm.current().name}`)
    consolePrompt.prompt()
}).on('close',function(){
    process.exit(0);
});