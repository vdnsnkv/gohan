import App from "./App.html";

const app = new App({
  target: document.body,
  data: {
    defaultRolls: 3,
    defaultBonus: 4,
    characters: [],
    players: []
  }
});

window.app = app;

export default app;
