export interface ITechTree {
    [category: string]: {
        [perk: string]: ITechPerk;
    };
}

export interface ITechPerk {
    name: string;
    description: string;
    image: string;
    points: {
        red?: number;
        green?: number;
        blue?: number;
    };
}