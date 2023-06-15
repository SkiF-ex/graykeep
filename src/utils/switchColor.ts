import red from 'assets/technology/Red_Tech_Symbol.png';
import blue from 'assets/technology/Blue_Tech_Symbol.png';
import green from 'assets/technology/Green_Tech_Symbol.png';

export const switchColor = (color: string) => {
    switch (color) {
        case 'red': return red;
        case 'blue': return blue;
        case 'green': return green;
        default: break;
    }
}