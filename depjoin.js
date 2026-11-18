import { depbase1 } from './depbase1.js'
import { depbase2 } from './depbase2.js'

export function depjoin(x) {
  return depbase1(x) + depbase2(x)
}
