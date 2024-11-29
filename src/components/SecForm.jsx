import { useForm } from "react-hook-form";
import styles from "./SecForm.module.css";
export default function SecForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.reviewForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <span>Name</span>

        <input
          {...register("name", {
            required: "this field is required",
            minLength: {
              value: 3,
              message: "Name must have at least 4 characters",
            },
          })}
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <div className={styles.errorMsg}>{errors.name.message}</div>
        )}
        <br></br>
        <span>Your thoughts</span>

        <textarea
          {...register("feedback", {
            required: "this field is required",
            minLength: {
              value: 4,
              message: "feedback must have at least 4 characters",
            },
          })}
          placeholder="Your thoughts"
        />
        {errors.feedback && (
          <div className={styles.errorMsg}> {errors.feedback.message}</div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
