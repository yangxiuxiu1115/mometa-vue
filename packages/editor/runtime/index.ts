import { inIframe } from '../shared/utils'
import('./document')
import('./componentTree')

if (inIframe()) {
  import('./route')
  import('./mouse')
  
}
