import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { useTypedSelector } from "src/store";
import { expenseActions } from "src/store/actions";
import { useCountRenders } from "src/hooks";

interface Params {
  id: string;
}

const Expense: React.FC = () => {
  useCountRenders("Expense");
  const componentIsMounted = useRef(true);

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<Params>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");

  const user = useTypedSelector(({ authReducer }) => authReducer.user);
  const expense = useTypedSelector(({ expenseReducer }) => expenseReducer.expense);

  useEffect(() => {
    if (componentIsMounted.current) {
      if (id !== "novo") {
        dispatch(expenseActions.getExpenseAsync(id));
      } else if (expense._id !== '') {
        dispatch(expenseActions.clearExpenseAsync())
      }
    }

    return () => {
      componentIsMounted.current = false;
      dispatch(expenseActions.clearExpenseAsync())
    };
  }, [dispatch, componentIsMounted, id]);

  useEffect(() => {
    setTitle(expense.title)
    setDescription(expense.description)
    setValue(expense.value)
    setType(expense.type)
  }, [expense])

  const handleChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const handleCreateExpense = (
    e: FormEvent,
    title: string,
    description: string,
    value: number,
    type: string
  ) => {
    e.preventDefault();

    const newExpense = {
      clientId: user._id!,
      title,
      description,
      value,
      type,
      paid: true
    };

    dispatch(expenseActions.createExpenseAsync(newExpense));
    history.push("/despesas");
  };

  return (
    <main className="container">
      <h1 className="my-5 text-center">
        {id === "novo" ? "Nova" : "Visualizar"} Dívida
      </h1>

      <form>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={id !== 'novo' ? true : false}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={id !== 'novo' ? true : false}
          />
        </div>

        <div className="form-group">
          <label htmlFor="value">Valor</label>
          <input
            type="number"
            name="value"
            className="form-control"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            disabled={id !== 'novo' ? true : false}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Tipo</label>
          <select
            name="type"
            value={type}
            className="form-control"
            onChange={(e) => handleChangeType(e)}
            disabled={id !== 'novo' ? true : false}
          >
            <option value="lazer">Lazer</option>
            <option value="casa">Casa</option>
          </select>
        </div>

        {id === 'novo' && <button
          type="button"
          className="btn btn-success mr-2"
          onClick={(e) =>
            handleCreateExpense(e, title, description, value, type)
          }
        >
          Criar
        </button>}

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => history.push('/despesas')}
        >
          Voltar
        </button>
      </form>
    </main>
  );
};

export { Expense };
