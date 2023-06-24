export interface Products {
    type: string,
    payload: []
 }

 export interface AllProduct {
    id: number
 }

 export interface State {
    productreducer: {
      products : []
    },
    _persist: {}
 }

 export interface mainproduct {
  id: number;
  image: string;
  title: string;
  price: number;
 }


 export interface CartItem {
    id: number;
    image: string;
    title: string;
    price: number;
 }