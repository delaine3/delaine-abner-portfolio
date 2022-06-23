import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link href="/">
          <button className="nav-button">Home</button>
        </Link>{" "}
      </nav>
    </div>
  );
}
