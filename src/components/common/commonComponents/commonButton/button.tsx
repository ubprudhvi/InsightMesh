import Button from '@mui/material/Button';
import { FC } from 'react';
// import './button.less'
import styles from './button.module.css'

interface IButtonProps {
    key?: string;
    children: String;
    variant?: 'text' | 'outlined' | 'contained';
    ButtonType?: 'primary' | 'secondary' | 'default';
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
    airiaLabel?: string;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    htmlType: 'submit' | 'button' | 'reset';
}


export const CommonButton: FC<IButtonProps> = (props: IButtonProps) => {
    const { children, htmlType = 'button', ButtonType = "primary", variant = 'text', disabled = false, onClick } = props

    return (

        <Button
            variant={variant}
            type={htmlType}
            disabled={disabled}
            onClick={onClick}
            aria-label={props.airiaLabel}
            fullWidth={props.fullWidth}
            className={styles.primaryButtonType}
            onMouseEnter={props.onMouseEnter}
        >
            {children}
        </Button>
    )
}