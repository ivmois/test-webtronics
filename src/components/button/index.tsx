import React from 'react';
import { ButtonType } from '../../types/enums';
import styles from './button.module.sass';

interface IButton {
  type: ButtonType;
  text: string;
  onClick?: () => void;
}

const Button = ({ type, text, onClick }: IButton) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
