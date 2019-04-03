import React from 'react'
import PropTypes from 'prop-types'

const Headline = (props) => {
    const {header, desc} = props
    if(!header) {
        return null
    }
    return (
        <div data-test='HeadlineComponent'>
            <h1 data-test='Header'>{header}</h1>
            <p data-test='Desc'>
                {desc}
            </p>
        </div>
    )
}

Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}

export default Headline
