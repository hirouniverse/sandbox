export class Validation {
  message: string
  constructor(message: string) {
    this.message = message
  }

  show() {
    console.log(this.message)
  }
}
