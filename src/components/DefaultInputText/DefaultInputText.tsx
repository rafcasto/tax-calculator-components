import React from "react";
import TextField from '@mui/material/TextField';
interface DefaultInputTextProps {
    id?:string,
    label?:string,
    variant?: 'outlined' | 'filled' | 'standard' ,
    onchange?: (event: object) => void
}
 
export const DefaultInputText = ({
    id,
    label,
    variant='standard',...props}:DefaultInputTextProps) => {
    return (<TextField  fullWidth  id={id}  data-testid={id}  label={label} variant={variant} />)
}
