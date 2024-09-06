// Namespace Configuration Values
const CQCORE = {};

CQCORE.turn = {
    value: 1,
    label: "TURN.TurnLabel",
    phase: {
        logistics: {
            label: "TURN.LogisticsLabel",
            current: true
        },
        action: {
            label: "TURN.ActionLabel",
            current: false
        }
    }
}

export default CQCORE;
