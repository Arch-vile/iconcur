import firebaseApp from "./firebase";
import { DATE_CHANGED, EVENTS_LOADED } from "./action-types";
import { loadEventsForDay } from "./actions";

const initialState = {
  calendarDate: "2018-05-18",
  events: []
};

// Paths in firebase:
// event =        events/:date/:eventId
// participant =  events/:date/:eventId/participants/:participantId/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE_CHANGED:
      var newState = { ...state, calendarDate: action.payload };
      return newState;
    case EVENTS_LOADED:
      console.log(
        "Updating state with new events: " +
          JSON.stringify(action.payload, null, 2)
      );
      var newState = { ...state, events: action.payload };
      return newState;
    default:
      console.error(`Unknown action: ${action.type}`);
      return state;
  }
};

export default rootReducer;

// setupFirebase = date => {
//   if (this.firebaseCallback)
//     this.firebaseRef.off("value", this.firebaseCallback);

//   this.baseRef = "events/" + this.props.selectedDate;
//   console.log("Fetching events: " + this.baseRef);
//   this.database = firebaseApp.database();
//   this.firebaseRef = this.database.ref(this.baseRef);
//   this.firebaseCallback = this.firebaseRef.on("value", snap => {
//     console.log("Updating events from server: " + JSON.stringify(snap.val()));
//     this.setState({ events: snap.val() });
//   });
// };
