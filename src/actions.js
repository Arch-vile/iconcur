import { DATE_CHANGED, EVENTS_LOADED } from "./action-types";

import firebase from "./firebase";

export const updateParticipant = participant => {
  setDocument(participant.ref, participant);
  return { type: "DUMMY" };
};

export const updateDate = newDate => ({
  type: DATE_CHANGED,
  payload: newDate
});

export const eventsLoaded = data => ({
  type: EVENTS_LOADED,
  payload: data
});

export const dataChanged = newDate => dispatch => {
  dispatch(updateDate(newDate));
  loadEvents(dispatch, newDate);
};

const loadEvents = (dispatch, forDate) => {
  const ref = "events/" + forDate;

  console.log("Fetching events: " + ref);
  const database = firebase.database();
  const firebaseRef = database.ref(ref);

  firebaseRef.on("value", snap => {
    const response = snap.val() || [];
    console.log("Response from server: " + JSON.stringify(response));
    dispatch(eventsLoaded(setRefs(response, ref)));
  });
};

const setDocument = (ref, document) => {
  const database = firebase.database();
  const firebaseRef = database.ref(ref);
  console.log("Saving document with ref: " + firebaseRef);
  console.log("Saving document: " + JSON.stringify(document, null, 2));
  firebaseRef.set(document);
};

// Firebase does not have arrays of objects with ids, but instead map of objects with id as key
// We will convert those to elements with the Firebase ref injected (the path with id)
const setRefs = (objectMap, basePath) => {
  return Object.keys(objectMap).map(key => {
    const o = objectMap[key];
    o.ref = basePath + "/" + key;

    // Convert deeply
    Object.keys(o).forEach(key => {
      if (typeof o[key] === "object") {
        o[key] = setRefs(o[key], o.ref + "/" + key);
      }
    });

    return o;
  });
};
