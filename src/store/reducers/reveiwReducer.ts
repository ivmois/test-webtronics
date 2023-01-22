import { ActionCreator, AnyAction } from 'redux';

interface IReviewAction {
  type: string;
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const countIncrement: ActionCreator<AnyAction> = () => ({
  type: INCREMENT,
});

export const countDecrement: ActionCreator<AnyAction> = () => ({
  type: DECREMENT,
});

const initialState: number = 1;

export const reveiwReducer = (state = initialState, action: IReviewAction): number => {
  switch (action.type) {
    case INCREMENT:
      return ++state;

    case DECREMENT:
      return --state;

    default:
      return state;
  }
};
