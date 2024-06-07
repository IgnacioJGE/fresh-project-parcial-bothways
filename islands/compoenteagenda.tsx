import { useState } from "preact/hooks";
import { contacto } from "../routes/agendacsr.tsx";
import Contacto from "../components/contacto.tsx";



export default function Aagenda(){


    const list:contacto[]=[]
    const [lista,setList]=useState(list)
    const [nombre,setNombre]=useState("")
    const [email,setEmail]=useState("")


    function handleclick(){
        const newcontact:contacto={
            nombre:nombre,
            email:email,

        }

        const newlist=[...lista,newcontact]

        setList(newlist)
    }
  return (
    <html>
      <body>
        <div class="layout">
          <div class="header">
            <a href="/agendacsr" data-current="true" aria-current="page">
              Agenda Client Side
            </a>
            <a href="/agendassr">Agenda Server Side</a>
          </div>
          </div>
          <h1>My Agenda</h1>
{      lista.length>0&&     <div class="agendaList">
          { lista.map((char)=>(
            <Contacto
            nombre={char.nombre}
            email={char.email}/>
        ))}
        </div>}

          <div class="agendaForm">
            <h2>Add new contact</h2>
            <input type="text" placeholder="Name" value={nombre} onInput={(e)=>setNombre(e.currentTarget.value)} name="nombre"/>
            <input type="email" placeholder="Email" value={email} onInput={(e)=>setEmail(e.currentTarget.value)}name="email" />
            <button onClick={handleclick}>Add contact</button>
          </div>
      </body>
    </html>
  );
}