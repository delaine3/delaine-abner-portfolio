import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <nav>
        <Link href="/">
          <a className="">Home</a>
        </Link>{" "}
        <Link href="/webProjects">
          <a className="">Web Apps</a>
        </Link>{" "}
        <Link href="/certificates">
          <a className="">Certificates</a>
        </Link>{" "}
      </nav>
      <div className="center">
        <h1 className="delaine">Delaine Abner</h1>
      </div>
    </div>
  );
}
