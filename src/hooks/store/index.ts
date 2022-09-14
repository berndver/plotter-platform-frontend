import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../types/store/appDispatch";
import type { AppState } from "../../types/store/appState";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const useAppDispatch = useDispatch<AppDispatch>;
