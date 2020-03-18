import { REMOVE_FEATURE, BUY_ITEM } from '../actions/actions';

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
  ]
};

export const reducer = (state = initialState, action) => {
  let index, spliceArray, newAdditionalPrice;
  switch(action.type) {
    case REMOVE_FEATURE:
      index = action.payload;
      spliceArray = [...state.car.features];
      spliceArray.splice(index, 1);
      newAdditionalPrice = state.additionalPrice - state.car.features[index].price;
      return {
        ...state,
        car: {
          ...state.car,
          features: spliceArray,
        },
        additionalFeatures: [...state.additionalFeatures, state.car.features[index]],
        additionalPrice: newAdditionalPrice,
      }
    case BUY_ITEM:
      index = action.payload;
      spliceArray = [...state.additionalFeatures]
      spliceArray.splice(index, 1);
      newAdditionalPrice = state.additionalPrice + state.additionalFeatures[index].price;
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            state.additionalFeatures[index]
          ]
        },
        additionalFeatures: spliceArray,
        additionalPrice: newAdditionalPrice,
      };
    default:
      return state;
  }
};
