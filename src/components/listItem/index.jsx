import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({title, desc}) => {
    return (
        <div data-test='ListItem'>
            {title ? (
                <h3 data-test='ListItem-title'>{title}</h3>
            ) : null}
            <p data-test='ListItem-desc'>{desc}</p>
        </div>
    )
}

ListItem.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListItem
