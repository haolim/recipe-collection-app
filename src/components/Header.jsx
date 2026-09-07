
export default function Header( {
    title, subtitle
} ) {
    return (
      <div className="header">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>  
    );
};