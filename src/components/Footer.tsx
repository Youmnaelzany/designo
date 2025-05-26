import Container from "./Container";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import OfficeInfo from "./OfficeInfo";

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <Container className="space-y-8 px-6 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
          <Logo variant="light" />
          <nav className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-end">
            <NavigationLinks className="text-white" />
          </nav>
        </div>
        <div className="relative mx-auto text-white/50 after:absolute after:top-0 after:h-3.5 after:w-full"></div>
        <OfficeInfo />
      </Container>
    </footer>
  );
}
