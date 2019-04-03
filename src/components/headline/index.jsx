import React from 'react'

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

export default Headline
