import React, { Fragment ,useState} from 'react'
import Gramatica from './Gramatica/Gramatica.js'

export interface ContadorProps {
 
    
}
 
const Contador: React.SFC<ContadorProps> = () => {

    const [contador, setContador] = useState(1)

    const agregar = () => {
        setContador(contador+1);
    }

    return ( 
        <Fragment>
            <button onClick={agregar}>Agregar</button>
            <h2>hola contador</h2>
            <h2>{contador}</h2>
        </Fragment>
     );
}
 
export default Contador;