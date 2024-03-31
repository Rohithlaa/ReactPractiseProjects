function Table({ data }) {
  const TableHeaders = Object.keys(data[0]).map((item) => (
    <th key={item}>{item}</th>
  ));
  return (
    <table>
      <tr>{TableHeaders}</tr>
      {data &&
        data.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
    </table>
  );
}

export default Table;
