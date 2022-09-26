import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

  const { register, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      email: data.email,
      password: data.password,

    }
    alert('New Admin create');
    reset();

    const url = `https://fast-dawn-24079.herokuapp.com/addAdmin`
    console.log(adminData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
      .then(res => console.log('admin added', res))

  };

  return (
    <div className="admin-section">
      <h2 className="text-center ">Make Admin</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div class="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" class="form-control" placeholder="Enter Admin Email" {...register("email")} required />
        </div>
        <div class="mb-3">
          <label className="form-label">Password</label>
          <input type="password" name="password" class="form-control" placeholder="password" {...register("password")} required />
        </div>

        <button type="submit" className="btn regular-button  mt-3">Submit</button>
      </form>
    </div>
  );
};

export default MakeAdmin;