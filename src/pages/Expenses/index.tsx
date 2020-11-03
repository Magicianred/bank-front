import React, { FormEvent, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCountRenders } from "src/hooks/useCountRenders";
import { useTypedSelector } from "src/store";
import { expenseActions } from "src/store/actions";
import { expenseTypes } from "src/store/types";

const Expenses: React.FC = () => {
  useCountRenders("Expenses");
  const componentIsMounted = useRef(true);

  const dispatch = useDispatch(); 
  const user = useTypedSelector(({ authReducer }) => authReducer.user);
  const expenses = useTypedSelector(({ expenseReducer }) => expenseReducer.expenses);

  useEffect(() => {
    if (componentIsMounted.current) {
      dispatch(expenseActions.getExpensesByUserIdAsync(user._id!));
    }
    return () => {
      componentIsMounted.current = false;
      dispatch(expenseActions.clearExpensesAsync())
    };
  }, [dispatch, user]);

  const handleDeleteExpense = (e: FormEvent, expenseId: string) => {
    e.preventDefault();
    dispatch(expenseActions.deleteExpenseAsync(expenseId));
  };

  return (
    <>
      <main className="container">
        <h1 className="my-5 text-center">Despesas</h1>
        <table className="table w-50 mx-auto">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Valor</th>
              <th scope="col">Tipo</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense._id}>
                <td>{expense.title}</td>
                <td>{expense.value}</td>
                <td>{expense.type}</td>
                <td>
                  <Link to={`/despesas/${expense._id}`} className="btn btn-primary rounded-circle mr-3">
                    V
                  </Link>
                  <button
                    className="btn btn-danger rounded-circle mr-3"
                    onClick={(e) => handleDeleteExpense(e, expense._id!)}
                  >
                    X
                  </button>
                </td>
              </tr>
            )
            )}
          </tbody>
        </table>
        <Link type="button" className="btn btn-primary" to="/despesas/novo">
          Criar
        </Link>
      </main>
    </>
  );
};

export { Expenses };
