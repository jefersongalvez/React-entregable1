import React from 'react'

const Btn = ({ colorrandom, handeClick }) => {
    return (
        <div><button className="quote__btn" style={{ background: colorrandom, color: 'white' }} onClick={handeClick}> &gt; </button></div>
    )
}

export default Btn