interface Person {
  readonly id: number
  name: string
}

let person: Person = {
  id: 1,
  name: 'Alice',
}

// 正确：在对象字面量中设置 readonly 属性

// 错误：尝试修改 readonly 属性
// person.id = 2; // 这会导致编译错误
