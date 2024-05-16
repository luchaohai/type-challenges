const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38, nickname: 'hello' },
]

type PersonIndex = typeof MyArray[number]

type AgeIndex = typeof MyArray[number]['age']

type AgeIndex2 = PersonIndex['age']
