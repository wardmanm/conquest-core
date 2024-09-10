import CQCONFIG from "./module/config.mjs";
import TurnCounter from "./module/ui/turn-counter.mjs";
import { registerSettings } from "./module/settings.mjs";

globalThis.cqCore = {
  config: CQCONFIG,
  globals: { turn: { counter: 1, phase: "log" } }
};

Hooks.once("init", () => {
  globalThis.cqCore = game.cqCore = Object.assign(game.system, globalThis.cqCore);
  CONFIG.CQCORE = CQCONFIG;

  registerSettings();
});

Hooks.once("ready", () => {
  TurnCounter._onReady();
});

Hooks.on("cqCore-phase-change", (phase) => {
  console.log("cqCore-phase-change", phase);
});

Hooks.on("cqCore-turn-change", (turn) => {
  console.log("cqCore-turn-change", turn);
});