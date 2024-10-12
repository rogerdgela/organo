import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        let valor = evento.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>{ props.label }</label>
            <input required={props.obrigatorio} onChange={aoDigitado} placeholder={ placeholderModificado } />
        </div>
    )
}

export default CampoTexto