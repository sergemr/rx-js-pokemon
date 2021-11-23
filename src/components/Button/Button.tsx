import React from 'react';
import './Button.css';

interface iProps {
  text :string;
  bgColor:string;
  txtColor:string;
  funcion : ()=>void;
}
const Button = ( someProps : iProps )=> (
  <div className="Button" data-testid="Button">
    <button onClick={someProps.funcion} style={{backgroundColor : someProps.bgColor , color: someProps.txtColor}} type="button"> {someProps.text}</button>
  </div>
);

export default Button;
