import Button from "../Elements/Button/Button";
import SelectField from "../Elements/SelectField/SelectField";
import TextInputField from "../Elements/TextInputField/TextInputField";
import { optionItems } from "../../config/appConstants";
import { useFormik } from "formik";
import { useSystem } from "../../contexts/SystemContext/useSystem";
import * as Yup from "yup";
import { FormType } from "../../interface";
import { makeunSplashRequest } from "../../utlis/common";


export default function Form() {
  const { setshowModal, setloading, setFormValue, setImage, setError,pageCounter,setPageCounter } =useSystem();
 
  const initialValues: FormType = {
    name: "",
    surname: "",
    topic: "-1",
    othertopic: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be at most 50 characters")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
    surname: Yup.string()
      .required("Surname is required")
      .min(2, "Surname must be at least 2 characters")
      .max(50, "Surname must be at most 50 characters")
      .matches(/^[A-Za-z\s]+$/, "Surname can only contain letters and spaces"),
    topic: Yup.string().required('Please select an option')
    .notOneOf(['-1'], 'Please select a valid option'),
    othertopic: Yup.string().when("topic", ([topic], schema) => {
      return topic === 'Other'
        ? schema
            .required("Topic is required")
            .matches(/^[A-Za-z\s]+$/, "Topic can only contain letters and spaces")
        : schema.notRequired();
    })
  })
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setFormValue(values);
      makeunSplashRequest(
        values,
        pageCounter,
        setImage,
        setloading,
        setError,
        setPageCounter
        );
      setshowModal(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} data-testid="form">
      <div className="space-y-12">
        <div className="pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextInputField
              type="text"
              name="name"
              label="Name"
              placeholder="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.name && formik.errors.name}
            />

            <TextInputField
              type="text"
              name="surname"
              label="Surname"
              placeholder="Surname"
              value={formik.values.surname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errorMessage={formik.touched.surname && formik.errors.surname}
            />

            <SelectField
              name="topic"
              options={optionItems}
              label="Topics"
              onChange={formik.handleChange}
              value={formik.values.topic}
              errorMessage={formik.touched.topic && formik.errors.topic}
            />

            {formik.values.topic && formik.values.topic === "Other" && (
              <>
                <TextInputField
                  type="text"
                  name="othertopic"
                  label="Topic"
                  placeholder="Enter Topic"
                  onChange={formik.handleChange}
                  value={formik.values.othertopic}
                  onBlur={formik.handleBlur}
                  errorMessage={
                    formik.touched.othertopic && formik.errors.othertopic
                  }
                />
              </>
            )}
            <Button label="Submit" name="submit-btn" type="submit" />
          </div>
        </div>
      </div>
    </form>
  );
}
