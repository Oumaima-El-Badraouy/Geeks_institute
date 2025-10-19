import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_CATEGORY } from "./actions";

const initialState = {
  categories: { Work: [], Personal: [] },
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      if (state.categories[action.payload]) return state;
      return { ...state, categories: { ...state.categories, [action.payload]: [] } };

    case ADD_TODO:
      const { category, text } = action.payload;
      const newTodo = { id: Date.now(), text, completed: false };
      return {
        ...state,
        categories: {
          ...state.categories,
          [category]: [...(state.categories[category] || []), newTodo],
        },
      };

    case TOGGLE_TODO:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: state.categories[action.payload.category].map((todo) =>
            todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
          ),
        },
      };

    case REMOVE_TODO:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: state.categories[action.payload.category].filter(
            (todo) => todo.id !== action.payload.id
          ),
        },
      };

    default:
      return state;
  }
}
