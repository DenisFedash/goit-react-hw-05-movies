import styled from '@emotion/styled';

export const Container = styled.div`
  padding-top: 35px;
  padding-bottom: 35px;
  /* width: 320px; */
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 75px;
    padding-right: 75px;
  }
  @media screen and (min-width: 1024px) {
    /* width: 1024px; */
    padding-left: 70px;
    padding-right: 70px;
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  padding-bottom: 22px;
  width: 230px;
  vertical-align: middle;
  white-space: nowrap;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const Input = styled.input`
  width: 230px;
  height: 20px;
  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  border-bottom: 0.5px solid orange;
  font-size: $font-size-normal;
  float: left;
  color: $color-header-text;
  padding: 4px 20px 4px 4px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  color: orange;
  width: 48px;
  height: 35px;
  border: 0px;
  cursor: pointer;
  outline: none;
  background-color: white;
`;

export const Svg = styled.span`
  width: 1px;
  height: 1px;
  padding: 0px;
  overflow: hidden;
  clip: rect(0px, 0px, 0px, 0px);
  white-space: nowrap;
  border: 0px;
  :hover,
  :focus {
    color: black;
  }
`;
