import { useState } from "react";
import { SystemContext } from "./SystemContext";
import { FormType, Photo, PromiseErrorType, LocationType } from "../../interface";

export const SystemProvider = ({ children }: { children: React.ReactNode }) => {
  const [location, setLocation] = useState<LocationType|null>({ page: 'HOME'});
  const [showModal, setshowModal] = useState(false);
  const [image, setImage] = useState<Photo[] | null>(null);
  const [loading, setloading] = useState(false);
  const [formValue, setFormValue] = useState<FormType | null>(null);
  const [error, setError] = useState<PromiseErrorType | null>(null);
  const [imageCounter, setImageCouter] = useState(0);
  const [pageCounter, setPageCounter] = useState(1);

  const navigateToPage = (page: string) => {
    setLocation({
      page: page,
    });
  };

  return (
    <SystemContext.Provider
      value={{
        location,
        navigateToPage,
        showModal,
        setshowModal,
        image,
        setImage,
        loading,
        setloading,
        formValue,
        setFormValue,
        error,
        setError,
        setImageCouter,
        imageCounter,
        pageCounter,
        setPageCounter,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
};
