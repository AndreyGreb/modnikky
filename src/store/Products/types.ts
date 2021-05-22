export enum ProductActionTypes {
    SET_IS_AUTH = 'SET_IS_AUTH',
}

interface IObject {
    id: number, price: number, img: string
}

export type IProductState = IObject[]


