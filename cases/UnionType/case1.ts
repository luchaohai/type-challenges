type NumberLiteral = 1 | 2 | 3

function doSomething(value: NumberLiteral) {
  switch (value) {
    case 1:
      return 'One'
    case 2:
      return 'Two'
    case 3:
      return 'Three'
    default:
      // 这个 default 分支实际上永远不会执行，因为 value 只能是 1、2 或 3
      throw new Error('Unexhaustive switch case')
  }
}

doSomething(1) // 输出: One
doSomething(2) // 输出: Two
doSomething(3) // 输出: Three
doSomething(4) // 类型错误: Argument of type '4' is not assignable to parameter of type 'NumberLiteral'.
