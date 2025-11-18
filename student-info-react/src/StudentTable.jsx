const students = [
  { company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
  { company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
  { company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria' },
  { company: 'Island Trading', contact: 'Helen Bennett', country: 'UK' },
  { company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada' },
  { company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy' }
];

function StudentTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s, i) => (
          <tr key={i}>
            <td>{s.company}</td>
            <td>{s.contact}</td>
            <td>{s.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
