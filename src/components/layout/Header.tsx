import Container from "./Container";

export default function Header() {
  return (
    <header className="py-6 border-b border-gray-200">
      <Container>
        <h1 className="text-xl font-bold text-gray-800">Devsly</h1>
      </Container>
    </header>
  );
}
