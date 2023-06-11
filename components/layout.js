import Header from "./header";
import Container from "./container";
import Footer from "../components/footer";
import Background from "./background";

export default function Layout({ preview, children }) {
  return (
    <div className="h-[100vh] flex flex-col justify-between">
        <Header />
        <Container>{children}</Container>
        <Footer />
        <Background />
    </div>
  );
}
