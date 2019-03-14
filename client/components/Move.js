import React from 'react'
import styled, {css} from 'styled-components'

class Move extends React.Component {

        state = {
            isDragging: false,

            originalX: this.props.startx,
            originalY: this.props.starty,

            translateX: this.props.startx,
            translateY: this.props.starty,

            lastTranslateX: this.props.startx,
            lastTranslateY: this.props.starty,
        }

        //   this.handleMouseDown = this.handleMouseDown.bind(this)
        //   this.handleMouseMove = this.handleMouseMove.bind(this)
        //   this.handleMouseUp = this.handleMouseUp.bind(this)


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
    return (
        <div>
            <Container/>
        </div>
    )
  }
}

const Container = styled.div.attrs({
  style: ({x, y}) => ({
    transform: `translate(${x}px, ${y}px)`
  })
})`
  padding: 0rem 1rem 0rem 1rem;
  display: inline-block;
  position: absolute;
  ${({isDragging}) =>
    isDragging &&
    css`
      opacity: 0.8;
      cursor: grabbing;
      color: green;
    `};
`

export default Move
