namespace IndexedAccessTypesCase2 {

  type I1 = Person['age' | 'name']

  type I2 = Person[keyof Person]

  type AliveOrName = 'alive' | 'name'
  type I3 = Person[AliveOrName]
}
