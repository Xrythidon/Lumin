import { Container } from "react-bootstrap";
import HomeScreen from "../screens/HomeScreen";

export default function Home({keyword}) {
  return (
    <>
      <main className="py-3">
        <Container>
          <HomeScreen keyword={keyword} />
        </Container>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx) {

  const { keyword } = ctx.query;

  let filledKeyword = keyword;

  if(!keyword) {
    filledKeyword = "";
  }

  return {
    props: {
      keyword: filledKeyword,
    },
  };
}