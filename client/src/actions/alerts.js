// on va dispatch pour lappel dans le reducer
import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

//je veux pouvoir dispatch plus de 1 action
export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  //genere des id universelle grace a uuid
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  //retire les alerte du tableau apres 5seconde
  // car sinon a chaque submit sans modif des element on a toute les alert qui saffiche
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
