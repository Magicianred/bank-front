import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useTypedSelector } from "src/store";
import { debtActions } from "src/store/actions";
import { useCountRenders } from "src/hooks";
import { useHistory, useParams } from "react-router-dom";

interface ParamsType {
  id: string;
}

const Debt: React.FC = () => {
  useCountRenders("Debt");
  const componentIsMounted = useRef(true);

  const { id } = useParams<ParamsType>();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useTypedSelector(({ authReducer }) => authReducer.user);
  const debt = useTypedSelector(({ debtReducer }) => debtReducer.debt);

  useEffect(() => {
    if (componentIsMounted.current && id !== "novo") {
      function checkDebt() {
        dispatch(debtActions.getDebtAsync(id));
      }
      checkDebt();
    }
    return () => {
      componentIsMounted.current = false;
    };
  }, [id, componentIsMounted, dispatch]);

  const handleCreateDebt = async (
    title: string,
    description: string,
    value: number
  ) => {
    const newDebt = { clientId: user._id!, title, description, value };
    if (id === "novo") {
      await dispatch(debtActions.createDebtAsync(newDebt));
    } else {
      await dispatch(debtActions.updateDebtAsync(debt._id!, newDebt));
    }
    history.push("/dividas");
  };

  return (
    <main className="container">
      <h1 className="my-5 text-center">
        {id === "novo" ? "Nova Dívida" : "Alterar Dívida"}
      </h1>

      <Formik
        initialValues={{
          title: debt.title ? debt.title : "",
          description: debt.description ? debt.description : "",
          value: debt.value ? debt.value : 0,
        }}
        // validationSchema={validationSchema}
        onSubmit={({ title, description, value }) =>
          handleCreateDebt(title, description, value)
        }
      >
        <FormikForm>
          <div className="form-group">
            <Field
              type="text"
              name="title"
              placeholder="Título"
              className="form-control"
            />
            <ErrorMessage
              name="title"
              render={(message) => (
                <small style={{ color: "#ff0000" }}>{message}</small>
              )}
            />
          </div>

          <div className="form-group">
            <Field
              type="text"
              name="description"
              placeholder="Descrição"
              className="form-control"
            />
            <ErrorMessage
              name="description"
              render={(message) => (
                <small style={{ color: "#ff0000" }}>{message}</small>
              )}
            />
          </div>

          <div className="form-group">
            <Field
              type="number"
              name="value"
              placeholder="Valor"
              className="form-control"
            />
            <ErrorMessage
              name="value"
              render={(message) => (
                <small style={{ color: "#ff0000" }}>{message}</small>
              )}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {id === "novo" ? "Criar" : "Alterar"}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => history.push("/dividas")}
          >
            Voltar
          </button>
        </FormikForm>
      </Formik>
    </main>
  );
};

// const validationSchema = yup.object({
//   email: yup.string().trim().required("Email"),
//   password: yup.string().trim().min(6, "Mínimo 6 caractéres").required("Senha"),
// });

export { Debt };
