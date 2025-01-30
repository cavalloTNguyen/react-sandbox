type Column = {
  label: string;
};

type DataTableProps = {
  columns: Column[];
};

export function DataTable({ columns }: Readonly<DataTableProps>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <td key={column.label}>{column.label}</td>;
          })}
        </tr>
      </thead>
    </table>
  );
}
