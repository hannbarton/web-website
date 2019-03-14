import React from 'react'
import styled, {css} from 'styled-components'
import Folder from './Folder'

class FolderMove extends React.Component {

    state = {
        isDragging: false,

        originalX: 0,
        originalY: 0,

        translateX: 0,
        translateY: 0,

        lastTranslateX: 0,
        lastTranslateY: 0
    }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseDown = ({clientX, clientY}) => {
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('mouseup', this.handleMouseUp)

    this.setState({
      originalX: clientX,
      originalY: clientY,

      isDragging: true,
    })
  }

  handleMouseMove = ({clientX, clientY}) => {
    const {isDragging} = this.state
    const {onDrag} = this.props

    if (!isDragging) {
      return
    }
    this.setState(
      prevState => ({
        translateX: clientX - prevState.originalX + prevState.lastTranslateX,
        translateY: clientY - prevState.originalY + prevState.lastTranslateY
      }),
      () => {
        if (onDrag) {
          onDrag({
            translateX: this.state.translateX,
            translateY: this.state.translateY
          })
        }
      }
    )
  }

  handleMouseUp = (event, target) => {

    event.preventDefault()

    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('mouseup', this.handleMouseUp)

    this.setState(
      {
        lastTranslateX: this.state.translateX,
        lastTranslateY: this.state.translateY,
        isDragging: false
      },
      () => {
        if (this.props.onDragEnd) {
          this.props.onDragEnd()
        }
      }
    )
  }
  render() {
      console.log(this.state)
    return (
        <div className='folder-container'>
            <Move
                onMouseDown={this.handleMouseDown}
                x={this.state.translateX}
                y={this.state.translateY}
                isDragging={this.state.isDragging}
            >
                <Folder/>
            </Move>
        </div>
    )
  }
}

const Move = styled.div.attrs({
    style: ({x, y}) => ({
      transform: `translate(${x}px, ${y}px)`
    })
})`
position: fixed;
top: 1em;
right: 4em;
cursor: grab;
${({isDragging}) =>
  isDragging &&
  css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`
export default FolderMove
