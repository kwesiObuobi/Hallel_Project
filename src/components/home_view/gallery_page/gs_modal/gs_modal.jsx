import React from 'react'
import './gs_modal.css';

const GsModal = ({open}) => {
    // if (open) {
    //     document.querySelector('body').style.overflow = "hidden";
    // }

  return (
    <>
    {open && (
        <div className="gs_modal_overall_container">
            {/* <div className="gs_modal_overlay"></div> */}
            <button className='clickTest' onClick={() => {open = !open}}>close close ksdflsdjf slkdjfl dslkfj sldfj sdkfj s</button>
        </div>
        
    )}
    </>
  )
}

export default GsModal
