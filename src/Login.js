import React, { useState } from "react";
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (username && password) {
  //     // Perform authentication logic here
  //     handleLogin(username);
  //   }
  // };
  const handleSubmit = () => {
    if (username === "pace" && password === "123") {
      setIsLoggedIn(true);
      alert("Logged in!");
      handleLogin(username);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className='body'>
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >

              <div>
                <center>
                  <h2>Login</h2>
                  <br/>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* <br/> */}
                    <p>
                      <br/>
                      <input
                      className="#"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </p>
                    <p>
                      <button type="submit">Login Ngab</button>
                    </p>
                  </form>
                </center>
              </div>

              {/* <MDBBtn size="lg">Login</MDBBtn> */}

              <hr className="my-4" />

              <MDBBtn
                className="mb-2 w-100 flex-button"
                size="lg"
                style={{ backgroundColor: "#dd4b39", width:'0px' }}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with Google
              </MDBBtn>

              <MDBBtn
                className="mb-4 w-100 flex-button"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
              >
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Sign in with Facebook
              </MDBBtn>
            {/* </MDBCardBody> */}
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default Login;
