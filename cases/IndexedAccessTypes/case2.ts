type I1 = Person1['age' | 'name']

type I2 = Person1[keyof Person1]

type AliveOrName = 'alive' | 'name'
type I3 = Person1[AliveOrName]
