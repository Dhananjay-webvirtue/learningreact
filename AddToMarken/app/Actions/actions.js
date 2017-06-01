import dispatcher from "../Dispatcher/dispatcher";

export function createToMarkenList(id) {
    var action = {type: "ADD_MARKEN", ProductId: id};
    dispatcher.dispatch(action);
}

export function deleteFromMarkenList(id) {
    var action = {type: "DELETE_MARKEN", ProductId: id};
    dispatcher.dispatch(action);
}