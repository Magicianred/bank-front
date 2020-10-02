import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { authActions } from "../../store/actions";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (email: string, password: string) => {
    await dispatch(authActions.login(email, password));
    history.push("/home");
  };

  return (
    <main id="main-login" className="container-fluid d-flex">
      <div className="col d-flex align-items-center justify-content-center">
        <form className="w-25">
          <h2 className="text-center">ELCIESS</h2>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={({ email, password }) => handleLogin(email, password)}
          >
            <FormikForm>
              <div className="form-group">
                <Field
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  render={(message) => (
                    <small style={{ color: "#ff0000" }}>{message}</small>
                  )}
                />
              </div>
              <div className="form-group">
                <Field
                  type="password"
                  name="password"
                  placeholder="Senha"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  render={(message) => (
                    <small style={{ color: "#ff0000" }}>{message}</small>
                  )}
                />
              </div>
              <button
                className="btn btn-primary btn-block"
                type="submit"
              >
                Login
              </button>
              <Link
                className="btn btn-success btn-block"
                type="button"
                to="/register"
              >
                Registrar
              </Link>
            </FormikForm>
          </Formik>
        </form>
      </div>
    </main>
  );
};

const validationSchema = yup.object({
  email: yup.string().trim().required("Email"),
  password: yup.string().trim().min(6, "Mínimo 6 caractéres").required("Senha"),
});

export { Login };
