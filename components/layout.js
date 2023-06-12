import Header from "./header";
import Container from "./container";
import Footer from "../components/footer";
import Background from "./background";

export default function Layout({ preview, children }) {
  return (
    <div className="h-[100vh] w-[100vw] fixed flex flex-col justify-end">
        <Container>{children}</Container>
        <Header />
        <Footer />
        <Background />
    </div>
  );
}
