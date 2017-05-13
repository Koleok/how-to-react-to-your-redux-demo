import R from 'ramda'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'

export const toTree = R.compose(toJson, shallow)
