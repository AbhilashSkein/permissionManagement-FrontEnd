import {
  Button,
  Card,
  Divider,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import "../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ForgotPassword from "../components/admin/ForgotPassword";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [resData, setResData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData, "===>");
    e.preventDefault();

    const validationErrors = {};
    if (formData.email.trim() === "") {
      validationErrors.email = "Email is required";
    }
    if (formData.password.trim() === "") {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      console.log("login successfull");
    } else {
      setErrors(validationErrors);
    }
    await axios
      .post("http://localhost:8080/demo/user/login", formData)
      .then((response) => (response ? setResData(response?.data) : null))
      .catch((err) => console.error(err));
    // navigate('/adminhome');
  };

  useEffect(() => {
    localStorage.setItem("token", resData.token);
    if (resData.status === true && resData.token) {
      console.log(resData, "response====>");
      navigate("/adminhome");
    }
  });
  return (
    <>
      <Card className="logincard">
        <Stack className="loginheading">
          <Typography variant="h4">Hello there!</Typography>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" className="stackemail">
            <FormLabel className="email">Email</FormLabel>
            <TextField
              className="emailtextfield"
              size="small"
              name="email"
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Stack>
          <Stack direction="row" className="stackemail">
            <FormLabel className="email">Password</FormLabel>
            <TextField
              className="passwordTextfield"
              size="small"
              name="password"
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Stack>
          <Button
            className="loginbutton"
            variant="contained"
            type="submit"
            color="primary"
          >
            Login
          </Button>
          <ForgotPassword />
          <Divider className="loginDivider">or</Divider>
        </form>
      </Card>
    </>
  );
};

export default Login;
