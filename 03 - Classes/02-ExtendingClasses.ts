enum Sizes {
  small,
  medium = 'medium',
  large = 'large'
}

class InventoryItem{
  name: string
  price: number

  constructor(name: string, price: number) {
      this.name = name
      this.price = price
  }
  buy(): this{
      alert(this.price)
      return this
  }
}

class Product extends InventoryItem{
  color: string = 'gray'
  size: Sizes | undefined
}

class Service extends InventoryItem {
  startTime: Date
  endTime: Date

  constructor(name: string, price: number,  startTime: Date, endTime: Date){
      super(name, price)
      this.startTime = startTime
      this.endTime = endTime
  }
}

const tshirt = new Product('TShirt Design B', 18)
tshirt.size = Sizes.medium
tshirt.color = 'green'
tshirt.buy()

const photoShoot = new Service(
  'Kelly Wedding Photo Shoot',
  450,
  new Date('May 9, 2009 11:00:00'),
  new Date('May 9, 2009 12:30:00')
)

photoShoot.buy()