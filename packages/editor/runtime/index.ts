import { inIframe } from '../shared/utils'
import('./document')

if (inIframe()) {
  import('./route')
  import('./mouse')
}
