import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export const Navbar: React.FunctionComponent<{
  onChange(value: boolean): void;
}> = (props) => {
  return (
    <nav>
      <div className="nav-wrapper purple teal lighten-1 px1">
        <a href="/" className="brand-logo">
          TodoList
        </a>

        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">
              <FormattedMessage id="to-do-list" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <FormattedMessage id="info" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FormattedMessage id="contacts" />
            </NavLink>
          </li>
          <li>
            <div className="switch">
              <label>
                EN
                <input
                  type="checkbox"
                  onChange={(e) => props.onChange(e.target.checked)}
                />
                <span className="lever" />
                RU
              </label>
            </div>
          </li>

          {/* <div className='input-field'>
          {" "}
          <select onChange={(e) => props.onChange(e.target.value)}>
            <option value={locales.RU}>RU</option>
            <option value={locales.EN}>EN</option>
          </select>
        </div> */}
        </ul>
      </div>
    </nav>
  );
};
