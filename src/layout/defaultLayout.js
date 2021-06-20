import React from 'react'
//import { AppFooter,AppHeader,AppSideBar} from '../src/components'

const DefaultLayout = () => {
  return (
    <div>
      <AppSideBar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout