import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Це поле обов'язкове для заповнення"),
  email: Yup.string().email('Введіть правильний формат email').required("Це поле обов'язкове для заповнення"),
  phone: Yup.string()
    .matches(phoneRegExp, 'Введіть правильний формат номеру телефона')
    .required("Це поле обов'язкове для заповнення"),
});

const initialValues = {
  name: '',
  email: '',
  phone: '',
};

const App = () => {

  const handleSubmit = (values) => {
    const { name, email, phone } = values;
    alert(`Ім'я: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    console.log();
  };

  return (
    <div className="form-container">
    
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div>
            <label htmlFor="name">Ім'я</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Електронна пошта</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="phone">Телефон</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          <button type="submit">Відправити</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
