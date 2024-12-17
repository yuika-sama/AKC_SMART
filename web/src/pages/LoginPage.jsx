import React, { useState } from 'react';
import { Button, Form, Input, Header, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Quản lý trạng thái loading
  const [errorMessage, setErrorMessage] = useState(''); // Quản lý thông báo lỗi
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Bắt đầu loading
    setErrorMessage(''); // Reset lỗi mỗi khi submit

    // Kiểm tra nếu email hoặc password trống
    if (!email || !password) {
      setIsLoading(false);
      setErrorMessage('Vui lòng nhập cả tài khoản và mật khẩu!');
      return;
    }

    // Kiểm tra tài khoản và mật khẩu hợp lệ
    if ((email === 'admin' || email === 'user') && password === '1') {
      // Lưu thông tin role vào localStorage
      const role = email === 'admin' ? 'admin' : 'user';
      localStorage.setItem('role', role); // Lưu role vào localStorage

      // Giả lập quá trình đăng nhập thành công với thời gian delay 2s
      setTimeout(() => {
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Role:', role); // Kiểm tra role lưu trong localStorage

        // Điều hướng tới trang dashboard
        navigate('/dashboard');
      }, 2000); // Delay 2s
    } else {
      // Nếu thông tin đăng nhập không hợp lệ
      setIsLoading(false);
      setErrorMessage('Sai tài khoản hoặc mật khẩu!');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px',
      backgroundColor: '#EFF8FF',
      width: "100vw",
      height: "100vh"
    }}>
      <div style={{
        width: '100vw',
        height: '5vw',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '-50px'
      }}>
        <Header as="h1" style={{ color: '#000' }}>
          VLH ERP - TOTAL MANAGEMENT
        </Header>
      </div>
      <div style={{
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '5px',
        width: '700px',
        height: 'auto',
        marginTop: '100px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Đăng nhập</h2>
        <p style={{ textAlign: 'center', color: '#777', marginBottom: '30px' }}>Chào mừng bạn trở lại!</p>

        {/* Hiển thị thông báo lỗi nếu có */}
        {errorMessage && (
          <Message negative>
            <Message.Header>{errorMessage}</Message.Header>
          </Message>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              placeholder="Nhập Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Mật khẩu</label>
            <Input
              id="password"
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          <Button
            type="submit"
            color="blue"
            fluid
            style={{ marginLeft: '0px' }}
            loading={isLoading} // Hiển thị loading spinner khi isLoading là true
          >
            {isLoading ? 'Đang đăng nhập...' : 'Login'} {/* Thay đổi text tùy theo trạng thái loading */}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
