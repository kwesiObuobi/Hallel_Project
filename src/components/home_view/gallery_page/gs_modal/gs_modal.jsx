import React from 'react'
import './gs_modal.css';

const GsModal = ({open}) => {
  return (
    <>
    {open && (
        <div className="gs_modal_overlay">
            <div className="gs_modal_container">hi there</div>
        </div>
        
    )}
    </>
  )
}

export default GsModal
