import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

export const SelectComponent = ({filter, trees, setter}: {filter: string, trees:string[], setter: any}) => {
    return (
        <FormControl size='medium' sx={{ width: "300px" }}>
            <InputLabel color='secondary' id="demo-simple-select-label">Tree</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tree"
                value={filter}
                color='secondary'
                onChange={(event: SelectChangeEvent) => setter(event.target.value as string)}
            >
                {trees.map((item) => <MenuItem key={item} value={item}>{item}</MenuItem>)}
            </Select>
        </FormControl>
    )
}