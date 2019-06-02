import moment from "moment";

import { DATE_CHANGED, EVENTS_LOADED } from "./action-types";

const fromUrl = () => {
  return window.location.href.split("#")[1];
};

const currentDate = () => {
  return moment().format("YYYY-MM-DD");
};

const initialState = {
  calendarDate: fromUrl() || currentDate(),
  events: [],
  editablePlayers: [],
  loading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE_CHANGED:
      window.location.href =
        window.location.href.split("#")[0] + "#" + action.payload;
      return { ...state, calendarDate: action.payload, loading: true };
    case EVENTS_LOADED:
      console.log(
        "Updating state with new events: " +
          JSON.stringify(action.payload, null, 2)
      );
      return { ...state, events: action.payload, loading: false };
    case 'EDIT_MODE':
      const changed = [...state.editablePlayers, action.payload.name];
      return {...state, editablePlayers: changed};
      default:
      console.error(`Unknown action: ${action.type}`);
      return state;
  }
};

export default rootReducer;
