import React, { useRef } from 'react'

export default TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    }
    return (
    <>
        <input ref={inputEl} type='text'/>
        <button>Focus the input</button>
    </>
  )
}

