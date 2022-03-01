import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-charcoal-dark top-0 z-10 h-10">
      <ul className="flex justify-end items-center list-none text-lg mx-4">
        <li>
          <Link to="/" className="inline-block p-2 no-underline text-ghostwhite  hover:font-bold hover:text-goldenrod">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/create-team"
            className="inline-block p-2 no-underline text-ghostwhite  hover:font-bold hover:text-goldenrod"
          >
            Create Team
          </Link>
        </li>
      </ul>
    </nav>
  );
}
