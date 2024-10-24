"use client";
import { useEffect } from "react";
import { Collapse, initTWE, } from "tw-elements";
import Table from "./table";
import cardapio from "../itens";
import { list } from "postcss";
  initTWE({ Collapse });
const MyComponent = () => {
    const lista1 = [
        { id: 1, name: "Biscoito de carne", price: "R$ 10,00" },
        { id: 2, name: "Bolinho de peixe", price: "R$ 15,00" },
        { id: 3, name: "Salgado de frango", price: "R$ 12,00" },
        { id: 4, name: "Petisco de queijo", price: "R$ 18,00" },
        { id: 5, name: "Snack de batata", price: "R$ 8,00" },
      ];

  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTWE } = await import("tw-elements");
      initTWE({ Tooltip });
    };
    init();
  }, []);

  return (
    <div className="mx-auto lg:w-1/2 sm:w-full content-center justify-center my-auto mt-20 mb-20">
     <div id="accordionFlushExample">
        <div
            className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 transparente-black text-cyan-300 ">
            <h2 className="mb-0" id="flush-headingOne">
            <button
                className="group relative flex w-full items-center rounded-none border-0 transparente-black text-cyan-300 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-cyan-300 [&:not([data-twe-collapse-collapsed])]:transparente-black text-cyan-300 [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-3 text-center"><h1 className="text-2xl">Kuatys petiscos</h1></div>
                    <div className="col-span-12 md:col-span-4 text-center content-center">Serve 4 pessoas</div>
                </div>
                <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                </span>
            </button>
            </h2>
            <div
            id="flush-collapseOne"
            className="!visible border-0"
            data-twe-collapse-item
            data-twe-collapse-show
            aria-labelledby="flush-headingOne"
            data-twe-parent="#accordionFlushExample">
            <div className="px-5 py-4">
                    <Table items={cardapio['picadao']} />
            
            </div>
            </div>
        </div>
        <div
            className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 transparente-black text-cyan-300 ">
            <h2 className="mb-0" id="flush-headingTwo">
            <button
                className="group relative flex w-full items-center rounded-none border-0 transparente-black text-cyan-300 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-cyan-300 [&:not([data-twe-collapse-collapsed])]:transparente-black text-cyan-300 [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-3 text-center content-center"><h1 className="text-2xl">Barca de petiscos</h1></div>
                    <div className="col-span-12 md:col-span-4 text-center content-center">Serve de 2 a 3 pessoas</div>
                </div>
                <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                </span>
            </button>
            </h2>
            <div
            id="flush-collapseTwo"
            className="!visible hidden border-0"
            data-twe-collapse-item
            aria-labelledby="flush-headingTwo"
            data-twe-parent="#accordionFlushExample">
            <div className="px-5 py-4">
                    <Table items={cardapio['barcas']} />
            </div>
            </div>
        </div>
        <div
            className="rounded-none border border-e-0 border-s-0 border-t-0 border-neutral-200 transparente-black text-cyan-300 ">
            <h2 className="mb-0" id="flush-headingThree">
            <button
                className="group relative flex w-full items-center rounded-none border-0 transparente-black text-cyan-300 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-cyan-300 [&:not([data-twe-collapse-collapsed])]:transparente-black text-cyan-300 [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree">
                <div className="grid grid-cols-12 gap-4">        
                    <div className="col-span-12 md:col-span-4 text-center"><h1 className="text-2xl">Porções</h1></div>
               </div>
                <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                </span>
            </button>
            </h2>
            <div
            id="flush-collapseThree"
            className="!visible hidden border-0"
            data-twe-collapse-item
            aria-labelledby="flush-headingThree"
            data-twe-parent="#accordionFlushExample">
            <div className="px-5 py-4">
                    <Table items={cardapio['porcoes']} />
                 
            </div>
            </div>
        </div>
        <div
            className="rounded-none border border-b-0 border-e-0 border-s-0 border-t-0 border-neutral-200 transparente-black text-cyan-300 ">
            <h2 className="mb-0" id="flush-headingFour">
            <button
                className="group relative flex w-full items-center rounded-none border-0 transparente-black text-cyan-300 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-cyan-300 [&:not([data-twe-collapse-collapsed])]:transparente-black text-cyan-300 [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                type="button"
                data-twe-collapse-init
                data-twe-collapse-collapsed
                data-twe-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour">
                    <div className="col-span-12 md:col-span-4 text-center"><h1 className="text-2xl">Bebidas</h1></div>
                <span
                className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                </span>
            </button>
            </h2>
            <div
            id="flush-collapseFour"
            className="!visible hidden"
            data-twe-collapse-item
            aria-labelledby="flush-headingFour"
            data-twe-parent="#accordionFlushExample">
            <div className="px-5 py-4">
                <Table items={cardapio['bebidas']} />
            </div>
            </div>
        </div>
     </div>
    </div>
  );
};

export default MyComponent;