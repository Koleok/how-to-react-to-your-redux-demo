import { createAction, handleActions } from 'redux-actions'
import { getPoems } from '../api'

const FETCHED_POEMS = 'FETCHED_POEMS'
const fetchedPoems = createAction(FETCHED_POEMS)

const FAILED_TO_FETCH_POEMS = 'FAILED_TO_FETCH_POEMS'
const failedToFetchPoems = createAction(FAILED_TO_FETCH_POEMS)

export const fetchPoems = url => dispatch =>
  getPoems(url).fork(
    err => dispatch(failedToFetchPoems(err)),
    poems => dispatch(fetchedPoems(poems))
  )

export const defaultState = { poems: [] }

export default handleActions(
  {
    [FETCHED_POEMS]: (state, action) => ({ poems: action.payload }),
    [FAILED_TO_FETCH_POEMS]: () => defaultState,
  },
  defaultState
)
