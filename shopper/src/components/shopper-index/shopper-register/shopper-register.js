import {ErrorMessage, Field, Formik, Form} from "formik";
import * as yup from "yup";
import axios from "axios";



export function ShopperRegister()
{
    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <Formik
             initialValues={{
                userId:"",
                userName:"",
                password:"",
                email:"",
                mobile:""
             }}

             validationSchema={
                yup.object({
                    userId: yup.string().required("User Id is required"),
                    userName: yup.string().required("User name is required"),
                password: yup.string().required("passward is required").matches(/(?=.*[A-Z])\w{4,15}/ , "password has to be 4 to 15 charecters with atleast one upper case letter"),
                email: yup.string().required("email is required").email("Invalid email"),
                mobile: yup.string().required("mobile is required").matches(/61\d{9}/, "ex: 61'123456789'")
                })
             }

             onSubmit={
                (values)=>{ 
                    axios.post("http://127.0.0.1:5000/register", values).then(()=>alert("Register Successfully...."));
                    // .catch((error) => {
                    //     console.error("Registration Error:", error);
                    //     // Handle error
                    //   });
                }
             }
             >
                {
                    <Form>
                    <dl>
                        <dt>UserId</dt>
                        <dd><Field type="text" name ="userId" /></dd>
                        <dd className="text-danger"><ErrorMessage name="userId"/></dd>
                        <dt>UserName</dt>
                        <dd><Field type="text" name="userName" /></dd>
                        <dd className="text-danger"><ErrorMessage name="userName"/></dd>
                        <dt>Password</dt>
                        <dd><Field type="password" name="password" /></dd>
                        <dd className="text-danger"><ErrorMessage name="password"/></dd>
                        <dt>Email</dt>
                        <dd><Field type="email" name="email" /></dd>
                        <dd className="text-danger"><ErrorMessage name="email"/></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="mobile"/></dd>
                        <dd className="text-danger"><ErrorMessage name="mobile"/></dd>
                    </dl>
                    <button type="submit" className="btn btn-primary">Register</button>
                </Form>
                }

            </Formik>
        </div>
    )
}