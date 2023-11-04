import { Actions,IUiActions, dispatchType } from "../types";

const useUi = (dispatch: dispatchType): IUiActions => {
  const handleModalChange = () => dispatch({ type: Actions.TOGGLE_MODAL })

  return ({ handleModalChange })
}

export default useUi