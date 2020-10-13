import React,{Component} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

import ReactSpeedometer from "react-d3-speedometer"

class Gauges extends Component {
  render() {
    return(
      <ReactSpeedometer
        minValue={-11}
        maxValue={50}
        value={-5.4}
        needleColor="black"
        startColor="blue"
        segments={10}
        endColor="red"
      />

    )
  }
}
export default Gauges


// const Gauges = () => {
//   const [collapsed, setCollapsed] = React.useState(true)
//   const [showCard, setShowCard] = React.useState(true)
//
//   return (
//     <>
//       <CRow>
//         <CCol xs="12" sm="6" md="4">
//           <CCard color="primary" className="text-white">
//             <CCardHeader>
//               Card title
//             </CCardHeader>
//             <CCardBody>
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//               laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
//               ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
//             </CCardBody>
//           </CCard>
//         </CCol>
//         <CCol xs="12" sm="6" md="4">
//           <CCard color="success" className="text-white">
//             <CCardHeader>
//               Card title
//             </CCardHeader>
//             <CCardBody>
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//               laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
//               ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
//             </CCardBody>
//           </CCard>
//         </CCol>
//         <CCol xs="12" sm="6" md="4">
//           <CCard color="info" className="text-white">
//             <CCardHeader>
//               Card title
//             </CCardHeader>
//             <CCardBody>
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//               laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
//               ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
//             </CCardBody>
//           </CCard>
//         </CCol>
//         <CCol xs="12" sm="6" md="4">
//           <CCard color="warning" className="text-white">
//             <CCardHeader>
//               Card title
//             </CCardHeader>
//             <CCardBody>
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//               laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
//               ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
//             </CCardBody>
//           </CCard>
//         </CCol>
//         <CCol xs="12" sm="6" md="4">
//           <CCard color="gradient-secondary">
//             <CCardHeader>
//               Card title - gradient
//             </CCardHeader>
//             <CCardBody>
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//               laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
//               ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
//             </CCardBody>
//           </CCard>
//         </CCol>
//         <CCol xs="12" sm="6" md="4">
//           <CFade in={showCard}>
//             <CCard>
//               <CCardHeader>
//                 Card actions
//                 <div className="card-header-actions">
//                   <CLink className="card-header-action">
//                     <CIcon name="cil-settings" />
//                   </CLink>
//                   <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
//                     <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
//                   </CLink>
//                   <CLink className="card-header-action" onClick={() => setShowCard(false)}>
//                     <CIcon name="cil-x-circle" />
//                   </CLink>
//                 </div>
//               </CCardHeader>
//               <CCollapse show={collapsed}>
//                 <CCardBody>
//                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
//                   laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
//                   ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
//                 </CCardBody>
//               </CCollapse>
//             </CCard>
//           </CFade>
//         </CCol>
//
//       </CRow>
//     </>
//   )
// }
//
// export default Gauges
