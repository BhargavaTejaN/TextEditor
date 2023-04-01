import styled from 'styled-components'

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 40px;
  cursor: pointer;
  color: ${props => (props.outline ? '#faff00' : '#f1f5f9')};
`
