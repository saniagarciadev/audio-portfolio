import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#3702E4]">
      <Container>
        <div className="py-3 px-7 text-right flex flex-row flex-wrap gap-10 items-center justify-end">
          <p>© 2023 Bien Sûr</p>
        </div>
      </Container>
    </footer>
  );
}
