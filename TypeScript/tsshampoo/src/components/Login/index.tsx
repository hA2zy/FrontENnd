import React from "react";
import * as S from "./style";

export const LoginCom = () => {
  return (
    <S.LoginCon>
      <S.LoginForm>
        <S.LoginInput type="text" />
        <S.LoginInput type="password" />
        <S.LoginInput type="submit" />
      </S.LoginForm>
    </S.LoginCon>
  );
};
