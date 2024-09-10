export default class TurnCounter extends Application {
    constructor(options) {
        super(options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            dragDrop: [{dragSelector: '.container'}],
            template: "systems/conquest-core/templates/turn-counter.hbs",
        });
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find("#next-turn-btn").click(() => {
            this.onNextTurn();
        });
    }

    async getData(options={}) {
        const context = await super.getData(options);
        const turn = cqCore.globals.turn;

        return foundry.utils.mergeObject(context, {
            counter: turn.counter,
            phase: turn.phase === "log" ? game.i18n.localize("TURN.LogisticsLabel") : game.i18n.localize("TURN.ActionLabel")
        });
    }

    static _onReady(){
        ui.turnCounter = new TurnCounter();
        ui.turnCounter.render(true);
    }

    onNextTurn() {
        const turn = cqCore.globals.turn;

        if (turn.phase === "log") {
            turn.phase = "act";
            Hooks.call("cqCore-phase-change", turn.phase);
        } else {
            turn.counter++;
            turn.phase = "log";
            Hooks.call("cqCore-phase-change", turn.phase);
            Hooks.call("cqCore-turn-change", turn.counter);
        }

        cqCore.globals.turn = turn;
        this.render(true);
    }
}