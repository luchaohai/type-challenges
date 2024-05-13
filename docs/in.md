# keyof

> 操作符：类型守卫 | 运行时操作符

## Case1: 类型守卫

```Typescript
type Fish = { swim: () => void, species: "salmon" | "shark" };  
type Bird = { fly: () => void, species: "eagle" | "penguin" };  
  
function move(animal: Fish | Bird) {  
    if ("swim" in animal) {  
        // TypeScript 现在知道 animal 是 Fish 类型  
        animal.swim();  
    } else {  
        // TypeScript 现在知道 animal 是 Bird 类型  
        animal.fly();  
    }  
}
```



## Case2: 运行时操作符

```Typescript
const obj = { a: 1, b: 2, c: 3 };  
  
if ("a" in obj) {  
    console.log(obj.a); // 输出 1  
}  
  
if (!("d" in obj)) {  
    console.log("obj does not have a 'd' property"); // 输出该消息  
}

// [Question]: 下面的答案是什么？
// 'a' in ['a']
```