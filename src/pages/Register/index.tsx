import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { clientActions } from "../../store/actions";

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegister = async (name: string, email: string, password: string) => {
    const newClient = { name, email, password };
    await dispatch(clientActions.createClient(newClient));
    history.push("/login");
  };

  return (
    <main id="main-register" className="container-fluid d-flex  h-100">
      <div className="col d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-center">Register</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={({ name, email, password }) => handleRegister(name, email, password)}
        >
          <FormikForm>
            <div className="form-group">
              <Field
                type="text"
                name="name"
                placeholder="Nome"
                className="form-control"
              />
              <ErrorMessage
                name="name"
                render={(message) => (
                  <small style={{ color: "#ff0000" }}>{message}</small>
                )}
              />
            </div>
            <div className="form-group">
              <Field
                type="email"
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
            <div className="form-group">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirmar Senha"
                className="form-control"
              />
              <ErrorMessage
                name="confirmPassword"
                render={(message) => (
                  <small style={{ color: "#ff0000" }}>{message}</small>
                )}
              />
            </div>
            <button type="submit" className="btn btn-block btn-success">
              Registrar
            </button>
            <button className="btn btn-block btn-danger">Voltar</button>
          </FormikForm>
        </Formik>
      </div>
    </main>
  );
};

const validationSchema = yup.object({
  name: yup.string().trim().required("Nome"),
  email: yup.string().trim().required("Email"),
  password: yup.string().trim().min(6, "Mínimo 6 caractéres").required("Senha"),
  confirmPassword: yup
    .string()
    .trim()
    .min(6, "Mínimo 6 caractéres")
    .oneOf([yup.ref("password"), undefined], "Senhas devem ser iguais"),
});

export { Register };
