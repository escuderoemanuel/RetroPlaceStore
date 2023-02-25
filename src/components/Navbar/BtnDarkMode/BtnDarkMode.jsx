import "./btnDarkMode.css";

//Context
import { useDarkModeContext } from "../../../context/DarkModeContext";

export const BtnDarkMode = () => {
  const { toggleDarkMode } = useDarkModeContext();
  return (
    <div className="switch form-check form-switch">
      <input
        className="form-check-input dark"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onInput={() => toggleDarkMode()}
      />
    </div>
  );
};
