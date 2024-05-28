interface Person {
  name: string
  xixi: number
  age?: string | number
}

type Employee = {
  id: number
  salary: number
}

type StaffMember = Person & Employee

const staff: StaffMember = {
  name: 'Alice',
  age: 30,
  id: 1,
  salary: 50000,
}
