import React, {useEffect, useState, createRef} from 'react'
import classNames from 'classnames'
import Gauges from 'src/views/base/gauge/gauges'
import MyGauge from "../../base/gauge/gauge2";

import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody, CFade, CLink, CCollapse, CCardGroup, CFormGroup, CLabel, CSelect, CInput, CButton
} from '@coreui/react'
import {rgbToHex} from '@coreui/utils'
import {DocsLink} from 'src/reusable'
import CIcon from "@coreui/icons-react";
import {CChartBar, CChartDoughnut, CChartLine, CChartPie, CChartPolarArea, CChartRadar} from "@coreui/react-chartjs";

const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{rgbToHex(color)}</td>
      </tr>
      <tr>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{color}</td>
      </tr>
      </tbody>
    </table>
  )
}

const Charts = () => {

  return (
    <React.Fragment>
      <CRow>
        <CCol xs="2">
          <CFormGroup>
            <CLabel htmlFor="ccmonth">انتخاب شهر</CLabel>
            <CSelect custom name="ccmonth" id="ccmonth">
              <option value="1">کرمانشاه</option>
              <option value="2">اصفهان</option>
              <option value="3">شیراز</option>
              <option value="4">رشت</option>
              <option value="5">تهران</option>
              <option value="6">مشهد</option>
              <option value="7">ایلام</option>
              <option value="8">کردستان</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </CSelect>
          </CFormGroup>
        </CCol>
        <CCol xs="2">
          <CFormGroup>
            <CLabel htmlFor="ccyear">انتخاب شهرستان</CLabel>
            <CSelect custom name="ccyear" id="ccyear">
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </CSelect>
          </CFormGroup>
        </CCol>
        <CCol xs="3">
          <CFormGroup>
            <CLabel htmlFor="ccyear">انتخاب مکان</CLabel>
            <CSelect custom name="ccyear" id="ccyear">
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </CSelect>
          </CFormGroup>
        </CCol>
        <CCol xs="3">
          <CFormGroup>
            <CLabel htmlFor="ccyear">انتخاب سطح</CLabel>
            <CSelect custom name="ccyear" id="ccyear">
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </CSelect>
          </CFormGroup>
        </CCol>
        <CCol col="2" sm="4" md="2" xl className=" mb-3 mb-xl-0">
          <CLabel htmlFor="ccyear"> اعمال</CLabel>
          <CButton block color="info">جستجو</CButton>
        </CCol>

      </CRow>
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard className="text-black-50 flex-column">
            <CCardHeader className="justify-content-start mb-3">
              یخچال خون
              <CLink to='/Typography' style={{marginRight:12}} className="card-header-actions">
                <CIcon name="cil-settings" />
              </CLink>
              <CLink to='../typography/Typography' className="card-header-actions">
                <CIcon name="cil-speedometer" />
              </CLink>


            </CCardHeader>
            <CCardBody className="d-flex justify-content-center mb-3 ">
              <MyGauge/>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard className="text-black-50 flex-column">
            <CCardHeader className="justify-content-start mb-3">
              یخچال خون
              <CLink to='/login' style={{marginRight:12}} className="card-header-actions">
                <CIcon name="cil-settings" />
              </CLink>
              <CLink to='/login' className="card-header-actions">
                <CIcon name="cil-speedometer" />
              </CLink>


            </CCardHeader>
            <CCardBody className="d-flex justify-content-center mb-3 ">
              <MyGauge/>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard className="text-black-50 flex-column">
            <CCardHeader className="justify-content-start mb-3">
              یخچال خون
              <CLink to='/login' style={{marginRight:12}} className="card-header-actions">
                <CIcon name="cil-settings" />
              </CLink>
              <CLink to='/login' className="card-header-actions">
                <CIcon name="cil-speedometer" />
              </CLink>


            </CCardHeader>
            <CCardBody className="d-flex justify-content-center mb-3 ">
              <MyGauge/>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard className="text-black-50 flex-column">
            <CCardHeader className="justify-content-start mb-3">
              یخچال خون
              <CLink to='/login' style={{marginRight:12}} className="card-header-actions">
                <CIcon name="cil-settings" />
              </CLink>
              <CLink to='/login' className="card-header-actions">
                <CIcon name="cil-speedometer" />
              </CLink>


            </CCardHeader>
            <CCardBody className="d-flex justify-content-center mb-3 ">
              <MyGauge/>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard className="text-black-50 flex-column">
            <CCardHeader className="justify-content-start mb-3">
              یخچال خون
              <CLink to='/login' style={{marginRight:12}} className="card-header-actions">
                <CIcon name="cil-settings" />
              </CLink>
              <CLink to='/login' className="card-header-actions">
                <CIcon name="cil-speedometer" />
              </CLink>


            </CCardHeader>
            <CCardBody className="d-flex justify-content-center mb-3 ">
              <MyGauge/>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard className="text-black-50 flex-column">
            <CCardHeader className="justify-content-start mb-3">
              یخچال خون
              <CLink to='/login' style={{marginRight:12}} className="card-header-actions">
                <CIcon name="cil-settings" />
              </CLink>
              <CLink to='/login' className="card-header-actions">
                <CIcon name="cil-speedometer" />
              </CLink>


            </CCardHeader>
            <CCardBody className="d-flex justify-content-center mb-3 ">
              <MyGauge/>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard className="text-black-50 flex-column">
            <CCardHeader className="justify-content-start mb-3">
              یخچال خون
              <CLink to='/login' style={{marginRight:12}} className="card-header-actions">
                <CIcon name="cil-settings" />
              </CLink>
              <CLink to='/login' className="card-header-actions">
                <CIcon name="cil-speedometer" />
              </CLink>


            </CCardHeader>
            <CCardBody className="d-flex justify-content-center mb-3 ">
              <MyGauge/>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard className="text-black-50 flex-column">
            <CCardHeader className="justify-content-start mb-3">
              یخچال خون
              <CLink to='/login' style={{marginRight:12}} className="card-header-actions">
                <CIcon name="cil-settings" />
              </CLink>
              <CLink to='/login' className="card-header-actions">
                <CIcon name="cil-speedometer" />
              </CLink>


            </CCardHeader>
            <CCardBody className="d-flex justify-content-center mb-3 ">
              <MyGauge/>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
    </React.Fragment>

  )
}

export default Charts
