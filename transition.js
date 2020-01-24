//
// Transition
class Transition{
  constructor(to, condition) {
    this.to = to
    this.condition = condition
  }

  shouldTransition() {
    return this.condition()
  }
}

module.exports.Transition = Transition