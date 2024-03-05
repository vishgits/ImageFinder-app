import { createContext, Dispatch, SetStateAction } from "react";

import { FormType, PromiseErrorType, Photo, LocationType } from "../../interface";

interface SystemContextValue {
    location: LocationType |null;
    navigateToPage: (page:string) => void;
    showModal:boolean,
    setshowModal:Dispatch<SetStateAction<boolean>>;
    image:Photo[] | undefined;
    setImage:Dispatch<SetStateAction<Photo[] | undefined >>;
    loading:boolean;
    setloading:Dispatch<SetStateAction<boolean>>;
    formValue: FormType | null;
    setFormValue:Dispatch<SetStateAction<FormType | null>>;
    setError:Dispatch<SetStateAction<PromiseErrorType | null>>;
    error:PromiseErrorType | null;
    imageCounter: number;
    setImageCouter:Dispatch<SetStateAction<number>>;
    pageCounter: number;
    setPageCounter:Dispatch<SetStateAction<number>>;
}


export const SystemContext = createContext<SystemContextValue>({
    location: null,
    navigateToPage: () => {},
    showModal: false,
    setshowModal: () => {},
    image: undefined,
    setImage: () => {},
    loading: false,
    setloading: () => {},
    formValue:{
      name: "",
      surname: "",
      topic: "-1",
      othertopic: "",
    },
    setFormValue: () => {},
    setError: () => {},
    error: null,
    imageCounter: 0,
    setImageCouter: () => {},
    pageCounter: 1,
    setPageCounter: () => {},
  });