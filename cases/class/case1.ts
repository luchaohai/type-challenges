// 抽象类
abstract class Animal {
  /*
  * 访问修饰符
  * public：成员是公开的，可以在任何地方被访问。（默认）
  * private：成员是私有的，只能在类内部被访问。
  * protected：成员是受保护的，可以在类内部以及子类中被访问。
  */
  // 属性成员
  public name: string
  // 只读属性
  readonly numberOfLegs: number = 8

  // 构造器
  constructor(name: string) {
    this.name = name
  }

  // 方法成员: 方法也可以加 abstract，此时需要在继承的类里实现
  public speak() {
    console.log(`${this.name} makes a noise.`)
  }

  // 抽象方法
  abstract eat(food: string): string

  // 静态成员：静态成员是可以继承的
  static myStaticProp = 42
  static myStaticMethod() {
    return this.myStaticProp
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`)
  }

  eat(food: string) {
    return `I eat + ${food}`
  }
}

// 静态成员执行
console.log(Animal.myStaticMethod())

// [Question]:下面这样可以执行么？
console.log(Dog.myStaticMethod())
