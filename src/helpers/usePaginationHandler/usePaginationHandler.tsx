import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { IPagination } from "../../api/dto/IPagination";
import { AnyAction } from "@reduxjs/toolkit";

export const usePaginationHandler = ({ action }: Pick<AnyAction, "action">) => {
  const dispatch = useDispatch();

  return useCallback(
    (changedPagination: IPagination, _: any) => {
      dispatch(action({ pageSize: changedPagination.pageSize || 5 }));
    },
    [action, dispatch]
  );
};
