import { createBrowserRouter } from 'react-router-dom'
import { PublicationsPage } from './pages/PublicationsPage'
import { PublicationContentPage } from './pages/PublicationContentPage'

function Error() {
  return <div>error</div>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicationsPage />,
  },
  {
    path: '/publicacao/:id',
    element: <PublicationContentPage />,
  },

  {
    path: '*',
    element: <Error />,
  },
])
