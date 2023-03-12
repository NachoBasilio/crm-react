import { useLoaderData } from "react-router-dom"

export function loader(){
  const clientes = [
    {
        id: 1,
        nombre: 'Nacho',
        telefono: 102013313,
        email: "nacho@athenea.com",
        empresa: 'Athena'
    },
    {
        id: 2,
        nombre: 'Trini',
        telefono: 138198313,
        email: "trini@artdecp.com",
        empresa: 'Art.decoraciones'
    },
    {
        id: 3,
        nombre: 'Juan',
        telefono: 31983913,
        email: "juan@juan.com",
        empresa: 'Codigo Con Juan'
    },
    {
        id: 4,
        nombre: 'Miguel',
        telefono: 319381983,
        email: "miguel@expss.com",
        empresa: 'Express'
    },
    {
        id: 5,
        nombre: 'Taco',
        telefono: 1398198938,
        email: "Taco@pokemon.com",
        empresa: 'Pokemon'
    },
];

  return clientes
}

export default function Index() {

  const clientes = useLoaderData()

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
    <p className="mt-3">Administra tus clientes</p>

    
    </>
  )
}
