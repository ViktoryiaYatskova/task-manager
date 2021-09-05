/* eslint-disable import/no-extraneous-dependencies */

import 'jest-enzyme'
import 'jest-styled-components'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'
import './mockStore'

configure({ adapter: new Adapter() })
