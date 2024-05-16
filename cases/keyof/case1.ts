interface PersonKey {
  name: string
  age: number
  isStudent: boolean
}

type PersonKeys = keyof PersonKey // type PersonKeys = "name" | "age" | "isStudent"

// 现在你可以使用 PersonKeys 类型作为索引来访问 Person 类型的属性
let key: PersonKeys
key = 'name' // 正确
key = 'age' // 正确
key = 'isStudent' // 正确
key = 'address' // 错误，因为 "address" 不是 Person 的键

let person: PersonKey = {
  name: 'Alice',
  age: 25,
  isStudent: false,
}

// 使用 key 变量来动态访问 person 的属性
let value: any = person[key] // 这里的 value 可以是 string、number 或 boolean
