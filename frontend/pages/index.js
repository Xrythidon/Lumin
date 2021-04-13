import { Container } from "react-bootstrap";
import HomeScreen from "../screens/HomeScreen";

export default function Home({keyword, pageNumber}) {
  return (
    <>
      <main className="py-3">
        <Container>
          <HomeScreen keyword={keyword} pageNumber={pageNumber} />
        </Container>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx) {

  const { keyword, page } = ctx.query;

  let filledKeyword = keyword;

  if(!keyword) {
    filledKeyword = "";
  }

  return {
    props: {
      keyword: filledKeyword,
      pageNumber: page || 1,
    },
  };
}