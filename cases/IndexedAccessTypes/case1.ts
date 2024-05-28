namespace IndexedAccessTypesCase1 {
  type Person = { age: number, name: string, alive: boolean }
  type Age = Person['age']
}
