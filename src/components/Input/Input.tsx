import React from 'react';
import classes from "./Input.module.scss";

type InputProps = {
    value: string;
    onChange: (value: string) => void;
    className: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({value, onChange, className, placeholder}) => {
    return (
        <input placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} className={className + ' ' + classes.input} />
    );
};

export default Input;