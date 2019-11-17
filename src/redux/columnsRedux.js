import shortid from 'shortid';

// selectors
export const getColumnsForList = ({ columns }, listId) => columns.filter(column => column.listId == listId);

// action name creator
const reducerName = 'columns';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_COLUMN = createActionName('ADD_COLUMN');

// action creators
export const createAction_addColumn = payload => ({ payload, type: ADD_COLUMN });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_COLUMN:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}