import { Avatar, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const points = [{ name: 'Red', img: 'https://i.ibb.co/zQxMf7X/Red-Tech-Symbol.webp' }, { name: 'Green', img: 'https://i.ibb.co/D4fZYBc/Green-Tech-Symbol.webp' }, { name: 'Blue', img: 'https://i.ibb.co/N6Wzp1P/Blue-Tech-Symbol.webp' }];

export const PointsFilter = () => {
    return (
        <FormGroup row sx={{ userSelect: "none", color: "text.primary" }}>
            {points.map((item) => {
                return (
                    <FormControlLabel
                        key={item.name}
                        control={<Checkbox />}
                        label={
                            <div style={{display: 'flex', alignItems: 'center', marginLeft: '-5px'}}>
                                <Avatar sx={{ height: "22px", width: '18px', marginRight: '3px' }} alt={item.name} src={item.img} />
                                {item.name}
                            </div>
                        }
                    />
                )
            })}
        </FormGroup>
    )
}