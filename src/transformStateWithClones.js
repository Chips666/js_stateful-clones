'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const history = [];
  let curentState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        curentState = { ...curentState, ...action.extraData };
        break;

      case 'removeProperties':
        curentState = { ...curentState };

        for (const key of action.keysToRemove) {
          delete curentState[key];
        }
        break;

      case 'clear':
        curentState = {};
        break;
    }
    history.push(curentState);
  }

  return history;
}

module.exports = transformStateWithClones;
