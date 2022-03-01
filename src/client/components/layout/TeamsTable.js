export default function TeamsTable({ teams }) {
  return (
    <table className="border-collapse text-left text-black m-auto table-auto">
      <thead className="bg-charcoal-dark text-ghostwhite text-center font-bold" data-test="teams-thead">
        <tr>
          <th className="border-2 border-black divide-solid p-2">Team name</th>
          <th className="border-2 border-black divide-solid p-2">Country</th>
          <th className="border-2 border-black divide-solid p-2">Actions</th>
        </tr>
      </thead>
      <tbody className="">
        {teams.map((team) => (
          <tr className="odd:bg-dark-green even:bg-ligth-green" key={team.id}>
            <td className="border-2 border-black divide-solid p-2">{team.shortName}</td>
            <td className="border-2 border-black divide-solid p-2">{team.area.name}</td>
            <td className="border-2 border-black divide-solid p-2">
              <a className="no-underline text-link-color mr-0.5" href={`/team/${team.id}/watch`}>
                Watch
              </a>
              ,
              <a className="no-underline text-link-color mx-0.5" href={`/team/${team.id}/edit`}>
                Edit
              </a>
              ,
              <a className="no-underline text-link-color ml-0.5" href={`/team/${team.id}/delete`}>
                Delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
