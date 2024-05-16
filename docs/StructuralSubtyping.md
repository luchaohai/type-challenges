# Structural Subtyping

> 结构子类型化

在TypeScript中，结构子类型化（Structural Subtyping）是一个核心概念，它决定了两个类型之间的关系是否满足子类型（或派生类型）到超类型（或基类型）的关系。TypeScript的类型系统是基于结构的，而不是基于类声明的名义（Nominal）。

在基于结构的类型系统中，如果两个类型具有兼容的结构（即它们具有相同或可分配的属性），那么一个类型就可以被认为是另一个类型的子类型。这意味着TypeScript不关注类是如何声明的，而只关注它们最终的结构。

以下是一些关于TypeScript结构子类型化的关键点：

1. **接口兼容性**：当一个类型满足另一个类型的所有必需属性时，它就被认为是兼容的。

#### [Case1](/cases/sturcturalTypeSytem/case2.ts)

注意：尽管上面的`Bird`接口中有一个拼写错误，但这并不会影响类型兼容性，因为TypeScript是基于结构的。
2. **类的类型兼容性**：类的实例类型也是基于结构的。类除了自己的成员外，还继承了其超类的所有成员。


```typescript
class Animal {
    eat(): void {}
}

class Dog extends Animal {
    bark(): void {}
}

let dog: Dog;
let animal: Animal;
animal = dog; // 可以，因为Dog继承了Animal的所有属性
dog = animal; // 错误，因为Animal不包含Dog的bark属性
```
3. **额外属性**：当将对象字面量赋值给类型时，如果对象字面量具有该类型未声明的额外属性，TypeScript会报错（除非该类型被声明为接收额外属性，如使用索引签名或`[key: string]: any`）。但是，当赋值给接口类型时，只要对象满足接口所必需的所有属性，额外的属性就会被忽略。


```typescript
interface Square {
    color: string;
    sideLength: number;
}

let mySquare = {color: "blue", sideLength: 10, cornerRadius: 5};

let square: Square = mySquare; // 错误，除非接口声明了额外属性的处理
```
4. **函数参数双向协变**：在TypeScript中，函数参数是双向协变的。这意味着源类型的参数可以是目标类型参数的子类型，或者目标类型参数可以是源类型参数的父类型（或两者兼而有之）。但是，对于函数返回值，TypeScript要求源类型的返回值必须是目标类型返回值的子类型或相同类型。
5. **索引签名和类型兼容性**：索引签名也参与类型兼容性判断。如果源类型具有目标类型所期望的索引签名（或更一般化的索引签名），则源类型与目标类型兼容。
6. **类型别名不创建新类型**：在TypeScript中，类型别名（使用`type`关键字定义）不会创建新的类型。它们只是现有类型的别名。因此，它们不会影响结构子类型化。

总的来说，TypeScript的结构子类型化规则允许在保持类型安全的同时，提供灵活的类型兼容性判断。这使得TypeScript在静态类型检查和动态JavaScript之间取得了良好的平衡。