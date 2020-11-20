import { Employee } from './static'
import { Validation } from './util/validation'

const main = (): void => {
  const emp1 = new Employee('Hironori', 'Kikuchi', 'Software Developer')

  const validation = new Validation('hello, world')

  console.log('\n---- start script ----')
  console.log('typescript begins...')

  console.log(Employee.id)
  console.log(Employee.getId())

  console.log(emp1.getAccountId())
  console.log(emp1.getName())
  console.log(emp1.getProfile())

  validation.show()

  console.log('---- finish script ----\n')
}

main()
