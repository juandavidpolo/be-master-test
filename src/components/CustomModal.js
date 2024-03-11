import React from 'react';

const CustomModal = ({
  children,
  changeModalState,
  hasSubmitLabel = true,
  submitLabel = "Guardar",
  cancelLabel = "Cancelar",
  width = "80vw",
  heigth = "80vh"
}) => {

  const handleClick = (event) => {
    if (event.target.classList.contains('custom--modal')) {
      changeModalState();
    }
  };

  return (
    <div className='custom--modal' onClick={ev => handleClick(ev)}>
      <div className='modal--structure' style={{ height: heigth, width: width }}>
        <div className='modal--body'>
          {children}
        </div>
        <div className='modal--footer'>
          {hasSubmitLabel &&
            <button type="button" className='btn btn-primary'>
              {submitLabel}
            </button>
          }
          <button type="button" className='btn btn-secondary' onClick={ev => changeModalState()}>
            {cancelLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export { CustomModal };