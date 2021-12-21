import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { map } from "lodash";

//i18n
import i18n from "../../../i18n";
import { withTranslation } from "react-i18next";

import languages from "../../../common/languages";

class LanguageDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      selectedLang: "en",
    }
  }

  componentDidMount() {
    const currentLanguage = localStorage.getItem("I18N_LANGUAGE")
    this.setState({ selectedLang: currentLanguage })
  }

  changeLanguageAction = lang => {
    //set language as i18n
    i18n.changeLanguage(lang)
    localStorage.setItem("I18N_LANGUAGE", lang)
    this.setState({ selectedLang: lang })
  }

  toggle = () => {
    this.setState(prevState => ({
      menu: !prevState.menu,
    }))
  }

  render() {
    const { selectedLang, menu } = this.state

    return (
      <React.Fragment>
        <Dropdown isOpen={menu} toggle={this.toggle} className="d-inline-block">
          <DropdownToggle className="btn header-item" tag="button">
            <img
              src={languages[selectedLang].flag}
              alt="Skote"
              height="16"
              className="me-1"
            />
          </DropdownToggle>
          <DropdownMenu className="language-switch dropdown-menu-end">
            {map(Object.keys(languages), key => (
              <DropdownItem
                key={key}
                onClick={() => this.changeLanguageAction(key)}
                className={`notify-item ${selectedLang === key ? "active" : "none"
                  }`}
              >
                <img
                  src={languages[key].flag}
                  alt="Skote"
                  className="me-1"
                  height="12"
                />

                <span className="align-middle">
                  {languages[key].label}
                </span>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    )
  }
}

export default withTranslation()(LanguageDropdown);
