export const featuredCars = [
  {
    id: 1,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2024,
    price: 849900,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
    mileage: '20,000 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Obsidian Black Metallic'
  },
  {
    id: 2,
    make: 'BMW',
    model: '3 Series',
    year: 2023,
    price: 749500,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    mileage: '13,200 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Alpine White'
  },
  {
    id: 3,
    make: 'Audi',
    model: 'A4',
    year: 2024,
    price: 792200,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    mileage: '9,300 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Navarra Blue Metallic'
  },
  {
    id: 4,
    make: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2023,
    price: 1065900,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
    mileage: '24,600 km',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    color: 'Selenite Grey Metallic'
  },
  {
    id: 5,
    make: 'BMW',
    model: '5 Series',
    year: 2024,
    price: 972800,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
    mileage: '5,500 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Phytonic Blue Metallic'
  },
  {
    id: 6,
    make: 'Audi',
    model: 'A6',
    year: 2024,
    price: 998500,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f3c90?w=800',
    mileage: '11,400 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Mythos Black Metallic'
  },
  {
    id: 7,
    make: 'Mercedes-Benz',
    model: 'GLC',
    year: 2023,
    price: 908700,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800',
    mileage: '19,100 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Polar White'
  },
  {
    id: 8,
    make: 'BMW',
    model: 'X3',
    year: 2024,
    price: 872400,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    mileage: '6,800 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Mineral White Metallic'
  },
  {
    id: 9,
    make: 'Audi',
    model: 'Q5',
    year: 2023,
    price: 834900,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    mileage: '15,400 km',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    color: 'Glacier White Metallic'
  },
  {
    id: 10,
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    price: 1850500,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    mileage: '3,400 km',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    color: 'Iridium Silver Metallic'
  },
  {
    id: 11,
    make: 'BMW',
    model: '7 Series',
    year: 2024,
    price: 1639900,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
    mileage: '2,900 km',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    color: 'Black Sapphire Metallic'
  },
  {
    id: 12,
    make: 'Audi',
    model: 'A8',
    year: 2023,
    price: 1528700,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800',
    mileage: '10,400 km',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    color: 'Daytona Grey Pearl Effect'
  }
];

export const availableModels = featuredCars.map(car => `${car.make} ${car.model}`);
