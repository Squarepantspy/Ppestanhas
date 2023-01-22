import React, {useState} from 'react'

const Pestanhas = (props) => {

    const [currentPes,setcurrentPes]=useState({
        etiqueta : null,
        contenido: null
    });

    const {arrayelem}=props; //desestructuramos de props

    const onClickHandler=(e,elemento)=>{
        const {contenido, etiqueta}=elemento; //desestructuramos el objeto
        console.log(`Se ha activado la pestanha ${etiqueta}`)
        setcurrentPes({...currentPes, contenido,etiqueta});//setea la pestanha activa
    }
    
  return (
    <div className='container mt-2'>
        {arrayelem.map((elemento,index)=><button key={index} type="button" className={elemento.etiqueta === currentPes.etiqueta ? 'btn bg-info' : 'btn btn-outline-info'} onClick={(e)=>onClickHandler(e,elemento)}>{elemento.etiqueta}</button> )}
        {currentPes.etiqueta !== null &&
        <div className="box"><p>{currentPes.contenido}</p></div>}
    </div>
  )
}

export default Pestanhas