var State = require('./state').State

//FSM
class FSM {
  constructor(options) {
    this.states = {}

    options.states.forEach(state => {
      this.states[state.name] = new State(state.name, state.transitions, {onEnter: state.onEnter, beforeExit: state.beforeExit})
    })

    let hasInitialState = options.hasOwnProperty('initalState')
    let stateKeys = Object.keys(this.states)
    this.currentState = hasInitialState ? this.states[options.initalState].name : this.states[stateKeys[0]].name
  }

  next () {
    let currentState = this.currentState
    let nextState = this.states[this.currentState].next()
    if(nextState != currentState){
      this.states[currentState].beforeExit()
      this.states[nextState].onEnter()
    }
    this.currentState = nextState
  }

  current () {
    return this.states[this.currentState]
  }
}

module.exports.FSM = FSM