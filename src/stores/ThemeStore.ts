import { observable, action } from "mobx";

class ThemeStore {
  @observable darkMode = true;

  @action
  toggleDarkMode = () => {
    this.darkMode = !this.darkMode;
  };
}

export default ThemeStore;