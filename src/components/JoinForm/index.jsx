import "./style.scss";
import HeaderText from "../HeaderText";
import AvatarSlider from "../AvatarSlider";
import WhitePillButton from "../WhitePillButton";

const JoinForm = ({ handleNameSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const myName = event.target.elements.name.value.trim();
    const temp = document.querySelector(".slick-center img");
    const tempPath = temp.getAttribute("src");
    handleNameSubmit(myName, tempPath);
  };
  return (
    <div
      className="joinFormPage"
      style={{
        backgroundImage:
          "url(/images/other/FRA-Second-Player---Join-Game---BACKGROUND.jpg)",
      }}
    >
      <HeaderText />
      <div className="buttonBox">
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="name">1 ENTER YOUR NAME:</label>
            <input
              type="text"
              placeholder="Name here..."
              id="name"
              name="name"
              pattern=".{2,}"
              title="Enter a name longer than 2 characters"
              required
            />
          </div>
          <div className="sliderSection">
            <label htmlFor=" ">2 PICK YOUR AVATAR:</label>
            <AvatarSlider />
          </div>
          <WhitePillButton text="READY" />
        </form>
      </div>
    </div>
  );
};
export default JoinForm;
