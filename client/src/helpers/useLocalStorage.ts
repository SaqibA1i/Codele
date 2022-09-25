import { useDispatch } from "react-redux";
import { GUESS_DATA } from "../redux/guesses";
import { OTHER_DATA } from "../redux/otherState";
import { LOCAL_STORAGE } from "../TS types/types";

const useLocalStorage = () => {
    const dispatch = useDispatch();
    const date = (new Date()).getDate();
    const localDate = localStorage.getItem(LOCAL_STORAGE.DATE) || "";

    if (localDate !== date.toString()) {
        localStorage.setItem(LOCAL_STORAGE.DATE, date.toString());
        dispatch(GUESS_DATA.update([]));
        dispatch(OTHER_DATA.updateSuccess(false));
    }
    else {
        dispatch(OTHER_DATA.updateSuccess(localStorage.getItem(LOCAL_STORAGE.SUCCESS) === "true"));
    }
}

export default useLocalStorage;
