import * as Feelings from '../actions/feelings';

export interface State {
  hateStas: boolean;
}

const initialState: State = {
  hateStas: true
};

// selector functions
export const getHateStas = (state: State) => state.hateStas;

// reducer function
export function reducer(state = initialState, action: Feelings.Actions): State {
  switch (action.type) {
    case Feelings.SET_STAS_HATERED:
      return {
        ...state,
        hateStas: action.hatred
      };
  }
  return state;
}
