// components/Table.js
import PropTypes from "prop-types"; // Para validação de tipos

const Table = ({ items }) => {


  return (
    <div className="overflow-x-auto">
      <table className="table-auto mx-auto border-collapse border border-gray-400">
        <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
          <tr>
            <th class="px-6 py-4">Nome</th>
            <th class="px-6 py-4">Descrição</th>
            <th class="px-6 py-4">Preço</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b border-neutral-200 transition duration-300 ease-in-out transparente-secundaria dark:border-white/10 dark:hover:bg-neutral-600">
              {Object.values(item).map((value, i) => (
                <td key={i} className="whitespace-normal break-words px-6 py-4">
                  {value}
                </td>
              ))}
            </tr>
          ))}
           {items.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="border border-gray-300 px-4 py-2 text-red-900 text-center"
                >
                  Nenhum item encontrado.
                </td>
              </tr>
            )}
          
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
