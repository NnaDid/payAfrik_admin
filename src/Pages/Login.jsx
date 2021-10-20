import React from "react"; 
import { Grid, Paper, Button,Avatar,TextField,FormControlLabel,Checkbox } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons//LockOutlined';
import Logo from '../assets/logo.png'

import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

function Login({ handleChange }) {
  const propertyStyle = {padding:20, height:'70vh', width:350, margin:'50px auto', borderRadius:5}
  const avatarStyle   = {backgroundColor:'#e3c007'}
  const inputStyle    = {margin:'8px 0'}

  const initialValues = {
    email_id:'',
    password:'',
    remember:false
  }

  const onSubmit = (values, props)=>{
    setTimeout(()=>{ 
      console.log(values)
      props.resetForm()
      props.setSubmitting(false)
    },2000);
  }

  const validationSchema = Yup.object().shape({
    email_id:Yup.string().email("Please enter valid email").required("required"),
    password:Yup.string().required("Required"),
  });

  return (
    <Grid>
      <Paper elevation ={10} style ={propertyStyle}>
          <Grid align='center'>
              <img src={Logo} />
              <Avatar style={avatarStyle}> <LockOutlinedIcon />  </Avatar>
              <h2> Admin Login</h2>
          </Grid>
         <Grid style={{margin:'0 14px'}}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                 
              {
                (props)=>(
                  <Form>
                       <Field
                            as ={TextField}
                            id="outlined-text"
                            label="Admin Email ID"
                            placeholder="Enter Eemail ID"
                            fullWidth
                            required
                            style ={inputStyle}
                            name ="email_id"
                            helperText ={<ErrorMessage  name="email_id" />}
                      />
                        <Field
                            as={TextField}
                            id="outlined-textinput"
                            label="Password"
                            placeholder="Enter your password"
                            fullWidth
                            required
                            style ={inputStyle} 
                            type='password'
                            name ="password"
                            helperText ={<ErrorMessage  name="password" />}
                      />
                      <Field as ={FormControlLabel} 
                        name="remember"
                        control={
                          <Checkbox  
                            color='primary'
                          />
                        }
                        label='Remember me'
                      />
                      <Button style ={inputStyle} type ='submit' 
                              color='primary' disabled={props.isSubmitting}
                              variant ='contained' fullWidth>{props.isSubmitting ? "Logging In ...":"SIGN IN"}</Button>
                  </Form>
                )
              }

            </Formik>
         </Grid>
      </Paper>
  </Grid>
  );
}
export default Login;
