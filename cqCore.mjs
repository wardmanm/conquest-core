// import { SystemActor, SystemItem } from "./module/documents.mjs";
// import { HeroDataModel, VillainDataModel, PawnDataModel, WeaponDataModel, SpellDataModel } from "./module/data-models.mjs";
import CQCORE from "./module/config.mjs";

Hooks.once("init", () => {
  CONFIG.CQCORE = CQCORE;
  CONFIG.debug.hooks = true;
  // // Configure custom Document implementations.
  // CONFIG.Actor.documentClass = SystemActor;
  // CONFIG.Item.documentClass = SystemItem;

  // // Configure System Data Models.
  // CONFIG.Actor.dataModels = {
  //   hero: HeroDataModel,
  //   villain: VillainDataModel,
  //   pawn: PawnDataModel
  // };
  // CONFIG.Item.dataModels = {
  //   weapon: WeaponDataModel,
  //   spell: SpellDataModel
  // };

  // // Configure trackable attributes.
  // CONFIG.Actor.trackableAttributes = {
  //   hero: {
  //     bar: ["resources.health", "resources.power", "goodness"],
  //     value: ["progress"]
  //   },
  //   pawn: {
  //     bar: ["resources.health", "resources.power"],
  //     value: []
  //   }
  // };
});