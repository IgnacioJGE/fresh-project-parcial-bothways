
import { useEffect, useState } from "preact/hooks";
import {contacto} from "../routes/agendacsr.tsx"
import Contacto from "../components/contacto.tsx";
type ContactosListProps ={
  listacontacts: contacto[];
}


export default function Contactoslist( listacontacts:ContactosListProps ){
const [lista,setlista]=useState<contacto[]>(listacontacts.listacontacts)
if(lista){
  useEffect(() => {
    setlista(listacontacts.listacontacts)
      },[listacontacts]);
    return(
        <div>
        {  lista.length>0  &&  <div class="agendaList">
              { lista.map((char)=>(
                <Contacto
                nombre={char.nombre}
                email={char.email}/>
            ))}
            </div>}
            </div>
    );
}else{
  return(<></>);
}



}