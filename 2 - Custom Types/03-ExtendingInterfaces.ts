interface InventoryItem{
  name: string,
  price: number,
}
interface Product extends InventoryItem{
  color?: string,
}
interface Service extends InventoryItem{
  startTime: Date,
  endTime: Date,
}

const tshirt : Product = {
  name: 'T-Shirt Design B',
  price: 12
}
const photoShoot : Service = {
  startTime: new Date('May 9, 2009 11:00:00'),
  endTime: new Date('May 9, 2009 12:00:00'),
  name: 'Kelly Wedding Photo Shoot',
  price: 450
}