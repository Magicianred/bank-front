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
import { bankerActions, debtActions } from "src/store/actions";
import { useCountRenders } from "src/hooks";

interface Params {
  id: string;
}

const Debt: React.FC = () => {
  useCountRenders("Debt");
  const componentIsMounted = useRef(true);

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<Params>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [bankerId, setBankerId] = useState("");

  const user = useTypedSelector(({ authReducer }) => authReducer.user);
  const debt = useTypedSelector(({ debtReducer }) => debtReducer.debt);
  const bankers = useTypedSelector(
    ({ bankerReducer }) => bankerReducer.bankers
  );

  useEffect(() => {
    if (componentIsMounted.current) {
      dispatch(bankerActions.getBankers());

      if (id !== "novo") {
        dispatch(debtActions.getDebtAsync(id));
      } else if (debt._id !== '') {
        dispatch(debtActions.clearDebtAsync())
      }
    }

    return () => {
      componentIsMounted.current = false;
      dispatch(debtActions.clearDebtAsync())
    };
  }, [dispatch, componentIsMounted, id]);

  useEffect(() => {
    setTitle(debt.title)
    setDescription(debt.description)
    setValue(debt.value)
    setBankerId(debt.bankerId)
  }, [debt])

  const handleChangeBanker = (e: ChangeEvent<HTMLSelectElement>) => {
    setBankerId(e.target.value);
  };

  const handleCreateDebt = (
    e: FormEvent,
    title: string,
    description: string,
    value: number,
    bankerId: string
  ) => {
    e.preventDefault();

    const newDebt = {
      clientId: user._id!,
      title,
      description,
      value,
      bankerId,
    };

    if (id === 'novo') {
      dispatch(debtActions.createDebtAsync(newDebt));
    } else {
      dispatch(debtActions.updateDebtAsync(id, newDebt))
    }
    history.push("/dividas");
  };

  return (
    <main className="container">
      <h1 className="my-5 text-center">
        {id === "novo" ? "Nova" : "Alterar"} Dívida
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
          />
        </div>

        <div className="form-group">
          <label htmlFor="bankerId">Banqueiro</label>
          <select
            name="bankerId"
            value={bankerId}
            className="form-control"
            onChange={(e) => handleChangeBanker(e)}
          >
            {bankers.map((banker) => (
              <option key={banker._id} value={banker._id}>
                {banker.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          className="btn btn-success mr-2"
          onClick={(e) =>
            handleCreateDebt(e, title, description, value, bankerId)
          }
        >
          {id === "novo" ? "Criar" : "Alterar"}
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => history.push('/dividas')}
        >
          Voltar
        </button>
      </form>
    </main>
  );
};

export { Debt };
