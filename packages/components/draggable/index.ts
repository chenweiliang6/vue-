export * from './src/draggable'
import { withInstall } from '@vangle/utils'
import Draggable from './src/draggable.vue'

export const WilDraggable = withInstall(Draggable)

export default WilDraggable