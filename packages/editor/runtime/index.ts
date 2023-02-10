import { inIframe } from '../shared/utils'

if (inIframe()) {
  import('./route')
}
