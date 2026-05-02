import { useState } from "react";

function StudentTable() {
  const data = [
    { id: 1, name: "Ravi" },
    { id: 2, name: "Sita" },
    { id: 3, name: "John" },
    { id: 4, name: "Asha" },
    { id: 5, name: "Kiran" },
    { id: 6, name: "Rahul" },
    { id: 7, name: "Meena" }
  ];

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 5;

  const filtered = data.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);

  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border="1">
        <tbody>
          {current.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <button
        disabled={start + perPage >= filtered.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default StudentTable;