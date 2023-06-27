import { ITechPerk } from './skills'

export interface IRedux {
    data: ITechPerk[];
    loader: boolean;
    trees: string[];
}

export interface IState {
    redux: IRedux;
}