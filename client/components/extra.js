// function handleMouseMove(clientX, clientY) {
//     if (!setIsDragging) {
//       return
//     }
//       prevState => {
//         translateX(clientX - prevState.originalX + prevState.lastTranslateX);
//         translateY(clientY - prevState.originalY + prevState.lastTranslateY);
//       }
//   }

//   function handleMouseUp(event) {
//     event.preventDefault();

//     window.removeEventListener('mousemove', handleMouseMove)
//     window.removeEventListener('mouseup', handleMouseUp)

//     lastTranslateX(translateX);
//     lastTranslateY(translateY);
//     setIsDragging(false)

//     (() => {
//       if (props.dragEnd) {
//         props.onDragEnd();
//       }
//     })
//   }
