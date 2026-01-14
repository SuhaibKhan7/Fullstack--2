import React,{useState} from 'react'

function useForm() {
 const [formData, setformData] = useState({
        username: '',
        email: '',
        password: ''
    })
    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
        setformData({
            ...formData,
            [name]: value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        if (formData.username == '' || formData.email == '' || formData.password == '') {
            alert("Please fill all the fields");
        }
        else if (formData.username.length < 3 || formData.password.length < 6) {
            alert("Username must be at least 3 characters and password must be more than 6 characters");
        }
        else {
            alert("Signup Successful");
        }
    }
  return (
    { formData, handleChange, handleSubmit }
  )
}

export default useForm