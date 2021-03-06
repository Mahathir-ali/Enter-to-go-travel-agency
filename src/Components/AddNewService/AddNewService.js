import React from "react";
import "./AddNewService.css";
import { useForm } from "react-hook-form";

const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch("https://limitless-dawn-51897.herokuapp.com/addPlan", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    reset();
  };

  return (
    <div className="add-plan">
      <h1>ADD PLAN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Name", { required: true, maxLength: 20 })}
          placeholder="name"
        />
        <br />
        <textarea {...register("description")} placeholder="description" />
        <br />
        <input type="number" {...register("price")} placeholder="price" />
        <br />
        <input {...register("img")} placeholder="image url" />
        <br />
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default AddNewService;
