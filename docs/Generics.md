# Generics

> 泛型，对应的操作符: <>

## Case1

[path 1](/utils/index.d.ts)

```Typescript
export type Expect<T extends true> = T
```

## Case2

[path 7](/utils/index.d.ts)

```Typescript
export type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
```