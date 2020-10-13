import React from 'react'
import ChartLineSimple from "../../charts/ChartLineSimple";
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import {DocsLink} from 'src/reusable'

const Typography = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Headings
          <DocsLink href="https://coreui.io/docs/content/typography/"/>
        </CCardHeader>
        <CCardBody style={{backgroundColor: 'orange'}}>
          <ChartLineSimple />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
