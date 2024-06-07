import { useState } from "preact/hooks";
import Agenda from "../islands/compoenteagenda.tsx"
export type contacto={
    nombre:string,
    email:string

}

export default function Agendassr() {
return(
    <Agenda/>
);
}
