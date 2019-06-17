import React, { useState } from 'react';

const BotonHook = () => {

  /* Establezco mi hooks creando Asignación por destructuring.
  1) active: valor el estado - 2)setActive: funcion que se encarga de actualiza.*/
  const [active, setActive] = useState(true); // useState Devuelve un valor con estado y una función para actualizarlo.

  const handleClick = () => setActive(!active); // La funcion cambiara el estadio a no activo

  return (
    <>
      {/* Al darle click al boto esta llamra la funcion y escondera el h1 muestra el estado y && el H1 */}
      <button onClick={handleClick}>Ocultar Hooks</button>
        { active &&
          <h1>Hola Hooks</h1>
        }
    </>
  );
}

export default BotonHook;
