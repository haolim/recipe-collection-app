
export default function Footer( {name} ) {
    const currentYear = new Date().getFullYear();
    return (
        <>
        Recipe Collection by {name} - {currentYear}
        </>
    );
};