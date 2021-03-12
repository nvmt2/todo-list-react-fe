import { typeProduct } from 'redux/product/constance';

const initialState = {
  products: null,
};

const storeProduct = (state = initialState, action) => {
  switch (action.type) {
    // testing
    case typeProduct.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: 1,
      };
    default:
      return state;
  }
};
export default storeProduct;
