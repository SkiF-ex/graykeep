export interface ITechPerk {
    name: string;
    tree: string;
    description: string;
    image: string;
    points: {
        red?: number;
        green?: number;
        blue?: number;
    };
    status: boolean;
}