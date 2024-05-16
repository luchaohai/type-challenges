interface Bird {
  fly(): void
  layEggs(): void // 假设这里有一个拼写错误，但这不影响结构子类型化的概念
}

interface Penguin {
  fly(): void
  layEggs(): void // 修正了拼写错误
  swim(): void
}

let penguin: Penguin = {
  fly: () => { },
  layEggs: () => { },
  swim: () => { },
}
let bird: Bird
bird = penguin // 可以，因为Penguin包含了Bird的所有属性
penguin = bird // 错误，因为Bird不包含Penguin的swim属性
