export default function Header({ title, subtitle }) {
  return (
    <header>
      <div className="header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}
