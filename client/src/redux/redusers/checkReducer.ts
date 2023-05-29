import locales from "../../locales/locales";
import {ICheckReducerPayload} from "../../../interfaces/payloadReducer.interface";

const initialStore = {
    checked: false,
    currentLocale: locales.EN
}

export default function checkReducer(state = initialStore, action: ICheckReducerPayload) {
    switch (action.type) {
        case 'UPDATE_LOCALE':
            return {...state, currentLocale: action.payload}
        default:
            return state
    }
}
