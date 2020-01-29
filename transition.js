//
// Transition

class Transition{
  constructor(moveTo, condition) {
    this.moveTo = moveTo
    this.condition = condition
  }

  shouldTransition() {
    let hasParams = this.condition.hasOwnProperty('params')
    return hasParams ? this.condition.testFunction(...this.condition.params) : this.condition.testFunction()
  }
}

module.exports.Transition = Transition