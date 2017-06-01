/**
 * Created by User on 5/24/2017.
 */
import dispatcher from "../Dispatcher/carDispatcher";


export function createToMarkenList(id) {
    var action = {type: "ADD_MARKEN", ProductId: id};
    dispatcher.dispatch(action);
}

export function deleteFromMarkenList(id) {
    var action = {type: "DELETE_MARKEN", ProductId: id};
    dispatcher.dispatch(action);
}
