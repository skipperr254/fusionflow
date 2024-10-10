import { useState } from 'react'
import './TypingBox.css'

const TypingBox = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleKeyDown = (event) => {
        console.log(event.key)
    }

    return (
        <div
            className="typing-box-container"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {!isFocused && <div className="overlay"><p>Click here to focus</p></div>}
            <div className={`typing-box ${isFocused ? "focused" : ""}`}>
                <p>
                    possible life late the real great any time about and last these early a present such seem go
                    again much for during open be end program make program get who more about too play these present
                    when person with how so down over again up one some while keep end
                </p>
            </div>
        </div>
    )
}

export default TypingBox
