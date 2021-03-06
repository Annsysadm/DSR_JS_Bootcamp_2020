import React from 'react'
import Square from './Square'

/* функциональный компонент 
уникальный идентификатор используем из БД например

*/

const Board = ({ squares, onClick }) => (
  <div className='board'>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);


  export default Board;

