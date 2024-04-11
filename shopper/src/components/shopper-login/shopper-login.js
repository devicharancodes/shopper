import { Formik,Form,Field,ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

export function ShopperLogin()
{
    const navigate = useNavigate();
    return(
        <div className="container-fluid">
            <h1>Login User</h1>
            <Formik
            
            initialValues={{
                userId:"",
                password:""
            }}
            
            validationSchema={
                yup.object({
                    userId: yup.string().required("userID is required"),
                    password: yup.string().required("password is required ")
                })
            }
            onSubmit={
                (values)=>{
                    axios.get("http://127.0.0.1:5000/users").then(res=>{
                        for(var user of res.data){
                            if(user.userId == values.userId && user.password == values.password){
                                // alert("login success");
                                navigate("/home");
                                break;
                            }else{
                                navigate("/invalid");
                            }
                            
                        }
                    })
                }
            }
            >
                {
                                <Form>
                                <dl>
                                    <dt>UserId</dt>
                                    <dd><Field type="text" name="userId" /><ErrorMessage name="userId"/></dd>
                                    <dt>Password</dt>
                                    <dd><Field type="password" name="password"></Field><ErrorMessage name="password"></ErrorMessage></dd>
                                </dl>
                                <button className="btn btn-primary">Login</button>
                                <div><span>New User Please </span> <Link to="/register"> Register</Link></div>
                            </Form>
                }

            </Formik>

        </div>

    )
}
