import { Container } from "react-bootstrap";
import HomeScreen from "../screens/HomeScreen";

export default function Home() {
  return (
    <>
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
    </>
  );
}
