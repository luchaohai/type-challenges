type demo1 = 1 & true
type demo2 = 1 & {}
type demo3 = 1 & []

interface Person {
  name: string
  age?: string | number
}

const H: Person = {
  xixi: 'string',
  haha: 10,
}

type X = [string, number]

['hello', 123]

type Y = (string | number)[]

const tt: Y = [123, 43, 34, 'rewr', 'rewr', 123]
