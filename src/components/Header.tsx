import Container from "./Container";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavigationLinks from "./NavigationLinks";

export default function Header() {
  return (
    <header className="sticky z-50 w-full bg-white shadow-md">
      <Container className="flex items-center justify-between px-6 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="flex w-full items-center justify-between gap-2.5 md:w-1/3 md:gap-0">
          <Logo variant="dark" />
          <MobileMenu />
        </div>
        <nav className="hidden items-center justify-end gap-6 md:flex">
          <NavigationLinks className="text-darkBlack hover:underline" />
        </nav>
      </Container>
    </header>
  );
}
