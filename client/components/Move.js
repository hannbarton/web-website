import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components'
import Browser from './Browser'

function Move() {

  const [isDragging, setIsDragging] = useState(false);
  const [originalX, setOriginalX] = useState(0);
  const [originalY, setOriginalY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [lastTranslateX, setLastTranslateX] = useState(0);
  const [lastTranslateY, setLastTranslateY] = useState(0);

  const handleMouseDown = (event) => {
      setOriginalX(event.clientX);
      setOriginalY(event.clientY)

      setIsDragging(true)
  }

  const handleMouseMove = (event) => {
    if (!isDragging) {
      return
    }
    else {
      setTranslateX(event.clientX - originalX + lastTranslateX);
      setTranslateY(event.clientY - originalY + lastTranslateY);
    }
  }

  const handleMouseUp = (event) => {

    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)

    setLastTranslateX(translateX);
    setLastTranslateY(translateY);
    setIsDragging(false)
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    });

  return (
    <div className='browser-container'>
        <Movement
            x={translateX}
            y={translateY}
        >
            <Browser/>
        </Movement>
    </div>
  )

}

const Movement = styled.div.attrs({
    style: ({x, y}) => ({
      transform: `translate(${x}px, ${y}px)`
    })
})`
top: calc(50vh - 250px);
position: fixed;
cursor: grab;
${({setIsDragging}) =>
  setIsDragging &&
  css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`
export default Move
