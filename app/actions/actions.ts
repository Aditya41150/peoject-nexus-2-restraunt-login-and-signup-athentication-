"use server"
import { redirect } from 'next/navigation'


export async function validateUser(formData:FormData) {
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(formData);
    let data = ""
    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:email,
                password: password
            })
        });
        if(response.ok){
            console.log(response);
             data = await response.json();
            console.log(data);
            
            
        }
        
            
        
    } catch (error) {
        console.log(error);
    }
    if(data){
        redirect('/');
    }
}

export async function createUser(formData:FormData) {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('c_password');
    console.log(formData);
    if(password !== confirmPassword){
        console.log('Passwords do not match');
        return ;
    }
    let data
    try {
         const response = await fetch('http://localhost:3001/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName:firstName,
                lastName:lastName,
                email:email,
                password: password
            })
        });
        if(response){
            console.log(response);
            data = await response.json();
            console.log(data);
        }

    } catch (error) {
        console.log(error);
    }
    if(data&&data.msg===undefined){
        redirect('/login');
    }
    else{
        return "User already exists"
    }

}