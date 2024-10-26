
'use client';
import { useState } from "react";
import Table from "./table";
import Image from 'next/image';
import petiscos2 from "../petiscos2.png"
import cardapio from "../itens";


export default function Menu(){
    const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo pesquisado

    const items = [
      { id: 1, name: "Biscoito de carne", price: "R$ 10,00" },
      { id: 2, name: "Bolinho de peixe", price: "R$ 15,00" },
      { id: 3, name: "Salgado de frango", price: "R$ 12,00" },
      { id: 4, name: "Petisco de queijo", price: "R$ 18,00" },
      { id: 5, name: "Snack de batata", price: "R$ 8,00" },
    ];
  
    // Filtra os itens com base no texto digitado
    // const filteredItems = cardapio['barcas'].filter((item) =>
    //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    return (
        <section>
        <div className="grid grid-rows-3 grid-flow-col content-center p-2 shadow-lg shadow-animation transparente-primaria">
          {/* Seção lateral com logo */}
          <div className="row-span-3 grid grid-rows-1 font-white justify-center">
            <div className="pt-4">
              {/* <img
                src="petiscos2.png"
                class="w-32 rounded-full"
                alt="Avatar" /> */}
                <Image src={petiscos2} width={100} height={100} class="w-32 rounded-full" alt="Avatar" />
              </div>
            <div className="text-center pt-4">
              <h1 className="text-2xl slogan-titulo">
                Kuatys <br/>Cardápio
              </h1>
            </div>
          </div>
  
          {/* Seção principal com campo de pesquisa */}
          {/* <div className="row-span-3 col-span-4 content-center ">
            <div className="input-container secundaria mb-4 ml-10">
              <input
                type="text"
                placeholder="Ache seu lanche aqui ...🔍"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-1/2"
              />
            </div>
          </div> */}
        </div>
  
        {/* Renderiza a tabela apenas se houver algum filtro aplicado */}
        {/* {filteredItems.length !== items.length && (
          <div className="mt-4 transparente-black text-cyan-300 p-20">
            <Table items={filteredItems} />
            <hr
  className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          </div>
          
        )} */}
      </section>
    )
}