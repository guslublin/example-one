import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para verificar el login con usuario y contraseña
    navigate('/home');  // Redirigir a la página de inicio si la autenticación es exitosa
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Login con Google exitoso', credentialResponse);
    navigate('/home');  // Redirigir después del login con Google
  };

  const handleGoogleFailure = () => {
    console.error('Error en el login con Google');
  };

  return (
    <GoogleOAuthProvider clientId="TU_CLIENT_ID_DE_GOOGLE">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form onSubmit={handleLogin} className="p-4 border rounded shadow" style={{ width: '300px' }}>
          <h3 className="mb-3 text-center">Iniciar Sesión</h3>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuario</label>
            <input type="text" className="form-control" id="username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">Ingresar</button>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            className="w-100"
          />
        </form>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
