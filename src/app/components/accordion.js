// components/Accordion.js
import { useState } from 'react';
import styles from './Accordion.module.css';
import cardapio from '../itens';
import Table from './table';

const AccordionItem = ({ title, subtitle, items }) => {
  const [isActive, setIsActive] = useState(false);

  const togglePanel = () => setIsActive(!isActive);

  return (
    <div >
      <button className={`${styles.accordion} ${isActive ? styles.active : ''}`} onClick={togglePanel}>
          <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3 text-center text-cyan-400"><h1 className="text-2xl">{title}</h1></div>
              <div className="col-span-12 md:col-span-4 text-center content-center text-yellow-500">{subtitle}</div>

          </div>
      </button>
      <div className={`${styles.panel}`} style={{ display: isActive ? 'block' : 'none' }}>
        <Table items={items} className="" />
      </div>
    </div>
  );
};

export default function Accordion() {

  return (
    <div className='mx-auto lg:w-1/2 sm:w-full content-center justify-center my-auto mt-20 mb-20'>
      {Object.entries(cardapio).map(([key, items]) => (
        <AccordionItem key={key} title={key.charAt(0).toUpperCase() + key.slice(1)} subtitle={items['subtitle']} items={items['items']} />
      ))}
    </div>
  );
}
