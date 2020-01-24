//
// State
class State {
  constructor(name, ...transitions) {
    this.name = name
    this.transitions = transitions
  }

  next () {
    let satisfied = this.transitions.filter(transition => transition.shouldTransition())
    return satisfied.length > 0 ? satisfied[0].to : this.name
  }
}

module.exports.State = State