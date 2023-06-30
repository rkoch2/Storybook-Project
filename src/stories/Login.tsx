import React from "react";

import { Button } from "./Button";
import { TextField } from "./TextField";
import { Checkbox } from "./Checkbox";

export const Login = () => (
  <div className="storybook-login">
    <h1 className="storybook-login__title">Login</h1>
    <TextField label="Email" placeholder="hello@world.com" />
    <TextField label="Password" placeholder="password123" />
    <Checkbox isChecked={false} text="Remember me" />
    <Button label="Log in" variant="filled" />
  </div>
);
