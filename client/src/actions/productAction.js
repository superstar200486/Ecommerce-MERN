import { GET_PRODUCTS, PRODUCT_LOADING, GET_ERRORS } from './types';
import { URL_GET_PRODUCTS, URL_GET_PRODUCTS_BY_CATEGORY } from '../utils/api-url';
import Http from '../utils/http';

export const getProducts = () => async distpatch => {
    try {
        distpatch({ type: PRODUCT_LOADING, payload: true });
        const products = await Http.get(URL_GET_PRODUCTS);
        distpatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
        const err = JSON.parse(error.message);
        distpatch({ type: GET_ERRORS, payload: err });
    }
}

export const getProductsByCategory = category => async distpatch => {
    try {
        distpatch({ type: PRODUCT_LOADING, payload: true });
        const products = await Http.get(`${URL_GET_PRODUCTS_BY_CATEGORY}/${category}`);
        distpatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
        const err = JSON.parse(error.message);
        distpatch({ type: GET_ERRORS, payload: err });
    }
}