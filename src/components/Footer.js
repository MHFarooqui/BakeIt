import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import github from '../images/icons8-github-50.png'
import leetcode from '../images/icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png'
import codewars from '../images/icons8-codewars-24.png'

export default function App() {
  return (
    <MDBFooter  className='text-center text- text-lg-start text-white footer-style'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div>
          <a href='https://github.com/MHFarooqui' className='text-reset text-dark ' style={{textDecoration: 'none', marginLeft: '5.5rem'}}>
            <img src={github} alt='' className='icon-style' style={{width: "25px"}}/> Github</a>
            <a href='https://leetcode.com/hackerHANIF/' className='text-reset m-3' style={{textDecoration: 'none'}}>
            <img src={leetcode} alt='' style={{width: "20px"}}/>Leetcode</a>
            <a href='https://www.codewars.com/users/Hhacker' className='text-reset' style={{textDecoration: 'none'}}>
            <img src={codewars} alt='' style={{width: "25px"}}/>Codewars</a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Tech used </h6>
              <p>
                  React
              </p>
              <p>
                  Node
              </p>
              <p>
                  Express
              </p>
              <p>
                  MOngoDB
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                farooquihanif02@example.com
              </p>
              
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023        
      </div>
    </MDBFooter>
  );
}