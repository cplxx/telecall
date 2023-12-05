import Nav from "./nav";
import Logo from "./logo";
import NavDesktop from "./nav-desktop";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Nav />
      <NavDesktop />
    </header>
  );
}
