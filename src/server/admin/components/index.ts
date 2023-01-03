import { ComponentLoader } from 'adminjs'
const componentLoader = new ComponentLoader()

const Components = {
  MyDashboard: componentLoader.add('Dashboard', './chat/index'),
}
export { componentLoader, Components }
