export interface ICar {
    carId: string
    brand: string
    name: string
    pricing: number
    locationId: string
    registeredOn: string
    vehicleNo: number
    ownerUserId: number
    ZoomCarAccessoriess: ZoomCarAccessoriess[]
}
  
export interface ZoomCarAccessoriess {
  accessoriesId: string
  accessoriesTitle: string
  showOnWebsite: boolean
  carId: string
}

export interface ILocation {
  locationId: string
  city: string
  title: string
  pincode: string
}
  
export interface IBooking {
  bookingId: string
  customerId: string
  fromLocationId: string
  toLocationId: string
  travelDate: string
  startTime: string
  carId: string
  pickupAddress: string
  alternateContactNo: string
  invoiceNo: string
  isComplete: boolean
}
