import { createAction, handleActions } from 'redux-actions'
import { createPoem } from '../utils'
import { getPoems } from '../api'

const FETCHED_POEMS = 'FETCHED_POEMS'
const fetchedPoems = createAction(FETCHED_POEMS)

const FAILED_TO_FETCH_POEMS = 'FAILED_TO_FETCH_POEMS'
const failedToFetchPoems = createAction(FAILED_TO_FETCH_POEMS)

const RANDOM_POEM = 'RANDOM_POEM'
export const randomPoem = createAction(RANDOM_POEM)

export const fetchPoems = url => dispatch =>
  getPoems(url).fork(
    err => dispatch(failedToFetchPoems(err)),
    (poems) => {
      dispatch(fetchedPoems(poems))
      dispatch(randomPoem(createPoem(poems)))
    }
  )

export const defaultState = { poems: [], generatedPoem: '' }

export default handleActions(
  {
    [RANDOM_POEM]: (state, { payload }) => ({
      ...state,
      generatedPoem: payload,
    }),
    [FETCHED_POEMS]: (state, { payload }) => ({
      ...state,
      poems: payload,
    }),
    [FAILED_TO_FETCH_POEMS]: () => defaultState,
  },
  defaultState
)
