import Contactoslist from "../islands/listacontacts.tsx"
import {contacto} from "../routes/agendacsr.tsx"

type contactolista={
    lista:contacto[]
}


export default function Compagssr(listacontacts:contactolista){
    return(
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
            <Contactoslist
            listacontacts={listacontacts}/>
  
            <div class="agendaForm">
              <h2>Add new contact</h2>
              <form action="/agendassr" method="POST">
              <input type="text" placeholder="Name" value="" name="nombre"/>
              <input type="email" placeholder="Email" value="" name="email" />
              <button type="submit">Add contact</button>
              </form>

            </div>
        </body>
      </html>
    );
    
}