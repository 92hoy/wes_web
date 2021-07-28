import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import FileUpload from "../util/FileUpload";

let conditonErrMessage = null;

const ImageUploade = (props) => {
  // State
  const [images, setImages] = useState("");

  const updataImages = (newImages) => {
    setImages(newImages);
  };

  return (
    <div>
      <FileUpload fileToParents={updataImages}></FileUpload>
    </div>
  );
};

//=================================
//       Styled-Component
//=================================

const FormContent = styled.div`
  height: 620px;
  background: white;
  border-radius: 30px;
  padding: 40px;
  margin-top: 2vw;
`;

const LoginPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  padding: 10px;
`;

const LoginText = styled.h1`
  margin: 0;
`;

const RegisterInputText = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 12px;
  color: #5f5f5f;
  font-weight: 500;
  margin-top: 29px;
`;

const RegisterInput = styled.input`
  width: 23vw;
  border: none;
  border-bottom: 1px solid #cbcbcb;
  font-size: 22px;
  &:focus {
    outline: none;
  }
`;

const ErrMsg = styled.h3`
  color: firebrick;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
`;

const PasswordText = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  font-size: 12px;
  color: #5f5f5f;
  font-weight: 500;
  margin-top: 29px;
`;

const PwdInput = styled.input`
  width: 23vw;
  border: none;
  border-bottom: 1px solid #cbcbcb;
  font-size: 22px;
  &:focus {
    outline: none;
  }
`;

const LoginBtn = styled.button`
  color: white;
  background: #49709f;
  border: none;
  border-radius: 26px;
  font-size: 21px;
  padding: 11px;
  font-weight: 300;
  width: 23vw;
  display: block;
  margin-top: 2vw;
  &:focus {
    outline: none;
  }
`;

export default withRouter(ImageUploade);
