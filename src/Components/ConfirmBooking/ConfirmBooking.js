import React from "react";
import { useForm } from "react-hook-form";
const ConfirmBooking = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
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

export default ConfirmBooking;
