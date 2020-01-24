//FSM
class FSM {
  constructor(...states) {
    this.states = {}

    states.forEach((state)=> {
      this.states[state.name] = state
      
    })

    let stateKeys = Object.keys(this.states)
    this.currentState = this.states[stateKeys[0]].name
  }

  next () {
    this.currentState = this.states[this.currentState].next()
  }

  current () {
    return this.states[this.currentState]
  }
}

function createFSM(...states){
  return new FSM(states)
}

module.exports.FSM = FSM