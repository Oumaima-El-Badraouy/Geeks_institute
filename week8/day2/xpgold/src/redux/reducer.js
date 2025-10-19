import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_CATEGORY } from "./actions";

const initialState = {
  categories: {
    Work: [],
    Personal: [],
  },
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      if (state.categories[action.payload]) return state; 
      return {
        ...state,
        categories: { ...state.categories, [action.payload]: [] },
      };

    case ADD_TODO: {
      const { category, text } = action.payload;
      const newTodo = { id: Date.now(), text, completed: false };
      return {
        ...state,
        categories: {
          ...state.categories,
          [category]: [...(state.categories[category] || []), newTodo],
        },
      };
    }

    case TOGGLE_TODO: {
      const { category, id } = action.payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          [category]: state.categories[category].map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        },
      };
    }

    case REMOVE_TODO: {
      const { category, id } = action.payload;
      return {
        ...state,
        categories: {
          ...state.categories,
          [category]: state.categories[category].filter((todo) => todo.id !== id),
        },
      };
    }

    default:
      return state;
  }
}

export default todoReducer;
