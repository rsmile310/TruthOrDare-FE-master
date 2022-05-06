import "./style.scss";

export default function HeaderText({ text }) {
  return (
    <div>
      <p className="headerText" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}
