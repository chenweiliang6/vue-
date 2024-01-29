export * from './src/search'
import { withInstall } from '@vangle/utils'
import Search from './src/search.vue'

export const WilSearch = withInstall(Search)

export default WilSearch