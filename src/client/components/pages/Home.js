import { useEffect, useState } from 'react';
import TeamsTable from '../layout/TeamsTable';

export default function Home() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('/api/v1/teams')
      .then((res) => res.json())
      .then((res) => setTeams(res));
  }, []);

  return (
    <div>
      <h1 className="mt-16 mb-5 font-bold text-3xl">LIST OF TEAMS</h1>
      <section>
        <span className="text-lg">There are {teams.length} teams</span>
        <button className="border-none text-center no-underline inline-block font-bold text-base rounded cursor-pointer ml-1 bg-gradient-to-b from-btn-linear-first to-btn-linear-second py-0.5 px-2">
          <a href="/create-team">Add</a>
        </button>
        <TeamsTable teams={teams} />
      </section>
    </div>
  );
}
