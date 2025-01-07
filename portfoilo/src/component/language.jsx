import "../sytle/lang.css";
function Language({ lang }) {
  return (
    <div className="langdiv">
      <img src={lang.img} alt={lang.name} className="langimg" />
      <h2 className="langname">{lang.name}</h2>
    </div>
  );
}
export default Language;
