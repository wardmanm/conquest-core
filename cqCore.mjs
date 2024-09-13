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

Hooks.on("renderSceneControls", () => {

  // Set up the sidebar button
  let button = document.querySelector("#CqCoreSidebarBtn");
  const controls = $(".main-controls.app.control-tools.flexcol");

  // TODO: offload this to a separate class
  if (controls && !button) {
    const newli = document.createElement("li");
    newli.classList.add("scene-control");
    newli.id = "CqCoreSidebarGroupBtn";
    newli.dataset.tool = "CqCoreSidebarGroupBtn";
    newli.setAttribute("aria-label", game.i18n.localize("CORE.SidebarLabel"));
    newli.setAttribute("role", "button");
    newli.dataset.tooltip = game.i18n.localize("CORE.SidebarHint");
    newli.innerHTML = `<i class="fas fa-hand-fist"></i>`;
    newli.addEventListener("click", cqCoreSideBarGroupClicked);
    controls.append(newli);
  }
});

function cqCoreSideBarGroupClicked() {
  console.log("cqCoreSideBarGroupClicked");
}