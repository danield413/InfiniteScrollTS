import React from 'react';
import PropTypes from 'prop-types';


type CardTypes = {
    lastElementRef: null | any
    title: string
    url: string
}

const Card = ({lastElementRef, title, url}: CardTypes) : JSX.Element => {

    return (
        <>
        { lastElementRef && <div ref={lastElementRef} className="card">
            <div className="card-center">
                <div className="img">
                    <img src={url} alt={title} />
                </div>
                <p className="img-title">{title}</p>
                </div>
            </div>}
        { !lastElementRef && <div className="card">
            <div className="card-center">
                <div className="img">
                    <img src={url} alt={title} />
                    </div>
                    <p className="img-title">{title}</p>
                </div>
            </div>}
        </>
    )
}

Card.propTypes = {
    lastElementRef: PropTypes.func,
    title: PropTypes.string,
    url: PropTypes.string
}

export default React.memo(Card)
