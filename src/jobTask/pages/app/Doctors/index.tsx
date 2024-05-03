
import Layout from '../../../components/Layout'
import ConditionalRendering from './ConditionalRendering'

export default function index() {
  return (
    <Layout label="Cultures" path="cultures">
    <ConditionalRendering />
  </Layout>
  )
}
