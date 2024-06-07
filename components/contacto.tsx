

import {contacto} from "../routes/agendacsr.tsx"


export default function  Contacto(contacto:contacto){
return(
<div>
    <ul>
      <li>
        <span>{contacto.nombre}</span>
        <span>{contacto.email}</span>
      </li>
    </ul>
  </div>
);
}