import React, { FormEvent, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCountRenders } from "src/hooks/useCountRenders";
import { useTypedSelector } from "src/store";
import { debtActions } from "src/store/actions";

const Debts: React.FC = () => {
  useCountRenders("Debts");
  const componentIsMounted = useRef(true);

  const dispatch = useDispatch();
  const user = useTypedSelector(({ authReducer }) => authReducer.user);
  const debts = useTypedSelector(({ debtReducer }) => debtReducer.debts);

  useEffect(() => {
    if (componentIsMounted.current) {
      dispatch(debtActions.getDebtsByUserIdAsync(user._id!));
    }
    return () => {
      componentIsMounted.current = false;
    };
  }, [dispatch, user]);

  const handleDeleteDebt = (e: FormEvent, debtId: string) => {
    e.preventDefault();
    dispatch(debtActions.deleteDebtAsync(debtId));
  };

  return (
    <>
      <main className="container">
        <h1 className="my-5 text-center">Dívidas</h1>
        <table className="table w-50 mx-auto">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Valor</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {debts.map((debt) => (
              <tr key={debt._id}>
                <td>{debt.title}</td>
                <td>{debt.value}</td>
                <th scope="col">
                  <button className="btn btn-success rounded-circle mr-3">
                    P
                  </button>
                  <Link to={`/dividas/${debt._id}`} className="btn btn-primary rounded-circle mr-3">
                    V
                  </Link>
                  <button
                    className="btn btn-danger rounded-circle mr-3"
                    onClick={(e) => handleDeleteDebt(e, debt._id!)}
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <Link type="button" className="btn btn-primary" to="/dividas/novo">
          Criar
        </Link>
      </main>
    </>
  );
};

export { Debts };
