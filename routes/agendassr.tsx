// routes/agendassr.tsx

import { Handlers, PageProps } from "$fresh/server.ts";
import Contacto from "../components/contacto.tsx";
import { contacto } from "./agendacsr.tsx";

interface Contacto {
  nombre: string;
  email: string;
}

interface Data {
  lista: Contacto[];
}

let contactos: Contacto[] = [];

export const handler: Handlers = {
  GET(req, ctx) {
    return ctx.render({  contactos });
  },
  async POST(req, ctx) {
    const formData = await req.formData();
    const nombre = formData.get("nombre")?.toString() || "";
    const email = formData.get("email")?.toString() || "";

    if (nombre && email) {
      contactos.push({ nombre, email });
    }

    return ctx.render({  contactos });

  },
};

export default function Agenda(props: PageProps) {
  const  lista:contacto[]  = props.data.contactos;

  return (
    <html>
      <body>
        <div class="layout">
          <div class="header">
            <a href="/agendacsr">Agenda Client Side</a>
            <a href="/agendassr" data-current="true" aria-current="page">
              Agenda Server Side
            </a>
          </div>
        </div>
        <h1>My Agenda</h1>
        {lista.length > 0 && (
          <div class="agendaList">
            {lista.map((char) => (
              <Contacto nombre={char.nombre} email={char.email} />
            ))}
          </div>
        )}
        <div class="agendaForm">
          <h2>Add new contact</h2>
          <form method="post">
            <input type="text" placeholder="Name" name="nombre" />
            <input type="email" placeholder="Email" name="email" />
            <button type="submit">Add contact</button>
          </form>
        </div>
      </body>
    </html>
  );
}
