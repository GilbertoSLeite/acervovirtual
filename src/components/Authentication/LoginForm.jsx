import React from "react";
import { useFormik, Form, FormikProvider } from "formik";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { Icon } from "@iconify/react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { LoadingButton } from "@mui/lab";

const LoginForm = () => {
  const [dataUser, setDataUser] = React.useState("");
  const [errorUser, setErrorUser] = React.useState(false);
  const [dataPass, setDataPass] = React.useState("");
  const [errorPass, setErrorPass] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  const { values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const analyticPass = () => {
    const validateUser =
      dataUser === "" ? setErrorUser(true) : setErrorUser(false);
    const validatePass =
      dataPass === "" ? setErrorPass(true) : setErrorPass(false);
    return validatePass && validateUser;
  };
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            id="name"
            fullWidth
            autoComplete="username"
            type="email"
            label="E-mail do Usuário"
            {...getFieldProps("email")}
            onChange={() => setDataUser()}
            helperText={dataUser === "" ? "Digite o seu E-mail" : "E-mail"}
            error={errorUser}
          />
          <TextField
            id="pass"
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            {...getFieldProps("password")}
            onChange={() => setDataPass()}
            helperText={dataUser === "" ? "Digite a sua Senha" : "Senha"}
            error={errorPass}
            label="Senha"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                {...getFieldProps("remember")}
                checked={values.remember}
              />
            }
            label="Lembrar Senha"
          />
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          onClick={analyticPass}
        >
          Acessar
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
