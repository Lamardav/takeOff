import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../core/redux/store/store";
import { AnyAction } from "@reduxjs/toolkit";
import { useDebouncedCallback } from "use-debounce";
import { contactsDispatches } from "../core/redux/thunk/contactsThunk";
import { Input } from "./input/input";

interface IProps extends Pick<AnyAction, "action"> {
  pageSize: number;
}

export const SearchInput = ({ action, pageSize }: IProps) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  const debouncedDispatcher = useDebouncedCallback((searchVal) => dispatch(action({ searchVal, pageSize })), 500);
  const debounceGetter = useDebouncedCallback(
    () => dispatch(contactsDispatches.getAllContacts({ searchVal: search })),
    500
  );

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    debouncedDispatcher(search);
    // на обновление тоже кинул дебаунс, чтобы не происходил рендеринг после каждого измененного символа
    debounceGetter();
  }, [debouncedDispatcher, dispatch, search]);

  return <Input value={search} onChange={onChangeSearch} placeholder={"Введите имя"} />;
};
