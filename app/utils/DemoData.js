import Sedan from '../assets/svg/Sedan.svg';
import Taxi from '../assets/svg/Taxi.svg';
import SUV from '../assets/svg/Suv.svg';
import Cat1 from '../assets/svg/Cat1.svg';
import Cat2 from '../assets/svg/Cat2.svg';
import Cat3 from '../assets/svg/Cat3.svg';

export const Cars = [
  {
    id:1,
    name: 'Sedan',
    image: Sedan,
  },
  {
    id:2,
    name: 'Taxi',
    image: Taxi,
  },
  {
    id:3,
    name: 'SUV',
    image: SUV,
  },
];

export const CarsInfo = [
  {
    id:1,
    backgoundColor: '#E8F1FD',
    image: require('../assets/images/Car2.png'),
    colorCode: '#2850E0',
    color:'Blue',
    seats: 5,
    name: 'Mini',
    carNo: 'MUsex1542',
  },
  {
    id:2,
    backgoundColor: '#FFEDED',
    image: require('../assets/images/car3.png'),
    colorCode: '#F80909',
    color:'Red',
    seats: 5,
    name: 'Sedan',
    carNo: 'MUsex1542',
  },
  {
    id:3,
    backgoundColor: '#FAFDE8',
    image: require('../assets/images/car4.png'),
    colorCode: '#FFF500',
    color:'Yellow',
    seats: 5,
    name: 'SUV',
    carNo: 'MUsex1542',
  },
];

export const Category = [
  {
    id:1,
    name: 'Airport Pick and Drop',
    image: Cat1,
  },
  {
    id:2,
    name: 'Daily Rentals',
    image: Cat2,
  },
  {
    id:3,
    name: 'Outstations',
    image: Cat3,
  },
];