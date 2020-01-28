var Transition = require('./transition').Transition

//
// State
class State {
  constructor(name, transitions, options) {
    this.name = name
    this.transitions = []
    if(options) {
      this.onEnter = options.onEnter? options.onEnter : ()=>{},
      this.beforeExit = options.beforeExit? options.beforeExit : ()=>{}
    }

    transitions.forEach(transition => {
      this.transitions.push(new Transition(transition.moveTo, transition.condition))
    });
    
  }

  next () {
    let satisfied = this.transitions.filter(transition => transition.shouldTransition())
    return satisfied.length > 0 ? satisfied[0].moveTo : this.name
  }
}

module.exports.State = State