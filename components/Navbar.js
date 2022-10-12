import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Top navbar
export default function Navbar() {
    
    const { user, username } = useContext(UserContext)

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">EY AM</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/vagas">
                <button className="btn-blue">Vagas</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Entrar</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}