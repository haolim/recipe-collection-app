export default function Footer({ name }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      Recipe Collection by {name} © {currentYear}
    </footer>
  );
}
