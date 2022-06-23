import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <nav>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>{" "}
        <Link href="/certificates">
          <a className="nav-link">Certificates</a>
        </Link>{" "}
        <Link href="/webProjects">
          <a className="nav-link">Web Apps</a>
        </Link>{" "}

      </nav>
              <h1 className="delaine">Delaine Abner</h1>

    </div>
  );
}
