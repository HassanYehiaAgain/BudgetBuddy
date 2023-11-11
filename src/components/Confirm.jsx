import React from 'react'
import './Styles/Confirm.Module.css'
import { ButtonStyled } from './Styles/ButtonStyled'
import { LabelStyled } from './Styles/LabelStyled'

export const Confirm = ({nextStep, prevStep, handleChange, values, errorHandle}) => {
  
  const Continue = e => {
    e.preventDefault();
    nextStep();
      }

  const Previous = e => {
    e.preventDefault();
    prevStep();
      }
  
  return (
    <div className='confirm-form'>
      
      <h1 className="form-title">Please review your info :)</h1>

      <LabelStyled gridcolumn= "1 / 3" gridrow= "3 / 4">First Name: {values.firstName}</LabelStyled>
      <LabelStyled gridcolumn= "1 / 3" gridrow= "4 / 5">Last Name: {values.lastName}</LabelStyled> 
      <LabelStyled gridcolumn= "1 / 3" gridrow= "5 / 6">Email: {values.email}</LabelStyled> 
      <LabelStyled gridcolumn= "1 / 3" gridrow= "6 / 7">Password: {values.password}</LabelStyled> 
      <LabelStyled gridcolumn= "1 / 3" gridrow= "7 / 8">Currency: {values.country}</LabelStyled> 
      <LabelStyled gridcolumn= "1 / 3" gridrow= "8 / 9">Country: {values.currency}</LabelStyled> 
      <LabelStyled gridcolumn= "1 / 3" gridrow= "9 / 10">Monthly Income: {values.avgIncome}</LabelStyled>  

      <ButtonStyled
        fsize = "100%" 
        color= "#FFF3E2" 
        bgcolor1 = "#FFF3E2" 
        bgcolor2 = "#7D2E68" 
        height= "80%" 
        width= "30%" 
        qheight = "70%"
        gridarea= "11 / 1 / 12 / 3" 
        onClick={ Previous }>
          Confirm
        </ButtonStyled>

      <ButtonStyled
          fsize = "80%" 
          color= "#FFF3E2" 
          bgcolor1 = "#FFF3E2" 
          bgcolor2 = "#7D2E68" 
          height= "80%" 
          width= "50%" 
          qheight = "70%"
          gridarea= "12 / 1 / 13 / 2" 
          onClick={ Previous }>
            Previous
          </ButtonStyled >

      <ButtonStyled 
        fsize = "120%" 
        color= "#FFF3E2" 
        bgcolor1 = "#FFF3E2" 
        bgcolor2 = "#7D2E68" 
        height= "80%" 
        width= "50%" 
        gridarea= "12 / 2 / 13 / 3" 
        qheight = "70%"
        onClick={ Continue }>
          Next
          </ButtonStyled >
    </div>
  )
}

export default Confirm
