type IsStringOrNumber<T> = T extends string | number ? true : false

type Test = IsStringOrNumber<string | number | boolean>
// Test 的类型是 true | false
// 但你可能期望它是 true，因为 string 和 number 都满足条件

// 但实际上，TypeScript 会这样处理：
// 对于 string: T extends string | number ? true : false => true
// 对于 number: T extends string | number ? true : false => true
// 对于 boolean: T extends string | number ? true : false => false
// 所以 Test 是 true | false 的联合
