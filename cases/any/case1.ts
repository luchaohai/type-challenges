// 将鼠标在value上悬停可以看到，最终value的类型被定义为any
let value: 1 & any
value = 1 // 正确，字面量 1 是允许的
value = 'hello' // 正确，尽管这不是字面量 1，但因为 value 是 any 类型，所以也是允许的
value = {} // 正确，同样因为 value 是 any 类型
