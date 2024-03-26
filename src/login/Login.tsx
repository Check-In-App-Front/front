import React from 'react';
import './Login.scss';

const Login: React.FC = () => {
  return (
    <div className="container">
      <div className="main-title">
        <h3>온라인 출석부</h3>
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/kakao_login_medium_narrow.png`} className="kakao-login-btn" alt="kakao-login" />
    </div>
  );
}

export default Login;