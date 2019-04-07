import React from 'react'
import PropTypes from 'prop-types'

const Button = ({buttonText, emitEvent}) => {
    return (
        <div>
            <button data-test='buttonComponent' onClick={emitEvent}>
                {buttonText}
            </button>
        </div>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}

export default Button
