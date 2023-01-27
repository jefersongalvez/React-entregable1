import React from 'react'
import Btn from './Btn'

const QuotesBox = ({ quote, handeClick, colorrandom }) => {

    return (
        <article className="quote" style={{ background: 'white', color: colorrandom }}>
            <i className="fa-solid fa-quote-left"></i>
            <p className="quote__quote">{quote.quote}</p>
            <h1 className="quote__author">{quote.author}</h1>

            <Btn colorrandom={colorrandom} handeClick={handeClick} />
        </article >
    )
}

export default QuotesBox