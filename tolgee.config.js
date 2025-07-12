import process from 'node:process'
import '@dotenvx/dotenvx/config'

export default {
  projectId: process.env.TOLGEE_PROJECT_ID,
}
