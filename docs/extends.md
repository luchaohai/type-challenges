# extends

> 关键字： 继承


## Case1：类继承

```typescript
class Animal {  
    name: string;  

    constructor(name: string) {  
        this.name = name;  
    }  

    speak(): void {  
        console.log(this.name + ' makes a noise.');  
    }  
}  

class Dog extends Animal {  
    bark(): void {  
        console.log(this.name + ' barks.');  
    }  
}  

const d = new Dog('Mitzie');  
d.speak(); // 输出 "Mitzie makes a noise."  
d.bark();  // 输出 "Mitzie barks."
```

### Note

1. 继承父类的 public 和 protected 的成员


## Case2: 接口继承

```typescript
interface Shape {  
    color: string;  
}

interface Square extends Shape {  
    sideLength: number;  
}

let square: Square = { color: "blue", sideLength: 10 };
```


## Case3: 泛型约束

```typescript
function getProperty<T extends { prop: string }>(obj: T): string {  
    return obj.prop;  
}  

let obj = { prop: 'Hello' };  
console.log(getProperty(obj)); // 输出 "Hello"
```