import { Dispatch, SetStateAction } from "react";
import { makeAxiosRequest } from "../services/makeRequest";
import { FormType, Photo, PromiseErrorType, APIResponseType } from "../interface";
import { ImagePerPage } from "../config/appConstants";

export function makeunSplashRequest(formValue: FormType | null,
    pageCounter: number,
    setImage: Dispatch<SetStateAction<Photo[] | undefined>>,
    setloading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<PromiseErrorType | null>>,
    setPageCounter: Dispatch<SetStateAction<number>>) {
    setloading(true);
    makeAxiosRequest({ 
        data: formValue?.topic === "Other" ? (formValue?.othertopic ? formValue?.othertopic : '') : (formValue?.topic ? formValue?.topic : ''),
        perPage: ImagePerPage, 
        pageCounter,
        getRespose: (res:APIResponseType) => {
            setImage(res.results)
            setPageCounter(pageCounter+1); 
        },
        getError: (error:PromiseErrorType) => {
            setError(error);
        },
        finished:() => {
            setloading(false);
        }
    })
}