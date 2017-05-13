import F from 'fluture'
import fetch from 'isomorphic-fetch'

const API_URL = 'https://thundercomb-poetry-db-v1.p.mashape.com'
const API_KEY = 'xKdopaZi1YmshCl828qEYjnHc3tMp1UzH4djsnKUQ5QMf3rGRK'
const options = { headers: { 'X-Mashape-Key': API_KEY } }

export const getPoems = F.fromPromise(x =>
  fetch(`${API_URL}${x}`, options).then(res => res.json())
)
