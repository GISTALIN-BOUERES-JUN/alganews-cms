import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import * as B from './Button.styles'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{ 
    variant: 'danger' | 'text' | 'primary'
    label: string
    

}

export default function Button ({ label, variant, ...props }: ButtonProps){
    return <B.Wrapper variant={variant} disabled={disabled}>
        {label}
    </B.Wrapper>

}

