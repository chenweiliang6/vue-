export * from './src/image-preview'
import { withInstall } from '@vangle/utils'
import ImagePreview from './src/image-preview.vue'

export const WilImagePreview = withInstall(ImagePreview)

export default WilImagePreview