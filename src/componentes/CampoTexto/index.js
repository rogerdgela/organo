import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    // let valor = "Rogerio"

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{ props.label }</label>
            <input value={props.valor} required={props.obrigatorio} onChange={aoDigitado} placeholder={ placeholderModificado } />
        </div>
    )
}

export default CampoTexto