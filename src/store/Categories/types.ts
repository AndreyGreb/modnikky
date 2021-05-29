export enum CategoryActionTypes {
  GET_CATEGORY = 'GET_CATEGORY',
}

export interface IObject {
  _id: string;
  category: string;
}

export type ICategoriesState = { category: IObject[] | [] };
