import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
// import css from "./ContactForm.module.css"

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімум 3 символи!")
    .required("Це обовʼязкове поле!"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Формат телефону - 000-00-00")
    .required("Це обовʼязкове поле"),
});

const ContactForm = ({ onAddContact }) => {
  const fieldId = useId();
  const contactId = nanoid(10);

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: contactId,
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            type="text"
            name="name"
            id={`${fieldId}-name`}
            placeholder="Your name"
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            type="tel"
            name="number"
            id={`${fieldId}-number`}
            placeholder="Your phone number"
          />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
