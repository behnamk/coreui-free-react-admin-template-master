import React from 'react'
import {Link, Switch} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const TheLayout = React.lazy(() => import('src/containers/TheContent'));

const btnLogin = () => {
  // <Route path="/dashboard" name="Home" render={props => <TheLayout {...props}/>} />

}


const Login = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>ورود</h1>
                    <p className="text-muted">ورود به پنل کاربری</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="نام کاربری" autoComplete="username"/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked"/>
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="رمز عبور" autoComplete="current-password"/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick='btnLogin'>ورود</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">فراموش کردن رمز عبور</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                <CCardBody className="text-center">
                  <div>
                    <h2>ثبت نام</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>حالا ثبت نام کنید!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
