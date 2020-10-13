import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://behpouya.ir" target="_blank" rel="noopener noreferrer">HADRON </a>
        <span className="ml-1"></span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">طراحی و اجرا :</span>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer"> شرکت پیشرو ارتباط بهپویا </a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
