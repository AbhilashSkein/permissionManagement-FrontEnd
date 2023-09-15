import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Link, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [responseData, setResponseData] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    setOpen(false);
    e.preventDefault();
    axios
      .post("http://localhost:8080/demo/user/forgotPassword", email)
      .then((response) => setResponseData(response))
      .catch((e) => console.log(e));
      setEmail("");
  };
  useEffect(() => {
    if (responseData?.data?.status === 200) {
      window.alert("email sent ");
    }
  }, [responseData, email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmail({ [name]: value });
  };
  // console.log(responseData.data.status,"=====>");
 

  return (
    <div>
      <Link variant="outlined" onClick={handleClickOpen} className="forgotLink">
        ForgotPassword
      </Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="forgotDialog">Enter your email</DialogTitle>
        <TextField
          className="forgotTextfield"
          size="small"
          name="email"
          onChange={handleInputChange}
        />
        <DialogActions style={{ marginTop: "30px" }}>
          <Button onClick={handleClose}>cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
