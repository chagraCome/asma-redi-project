import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./SecForm.module.css";
import { Divider } from "antd";

export default function SecForm({recipeId}) {
  const [feedbacks, setFeedbacks] = useState({}); 
  // State for structured feedbacks
  //const recipeId = "123"; // Example recipe ID (replace with dynamic value if needed)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [recipeId]: [
        ...(prevFeedbacks[recipeId] || []), // Existing feedbacks for the recipe
        data, // New feedback
      ],
    }));
    console.log(feedbacks); // Log updated feedbacks
    reset();
  };

  return (
    <>
      <Divider>Feedback</Divider>
 {/* Display feedbacks */}
 <div>
        <h3>All Feedbacks for Recipe {recipeId}</h3>
        <ul>
          {(feedbacks[recipeId] || []).map((item, index) => (
            <li key={index}>
              <strong>{item.name}:</strong> {item.feedback}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.reviewForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Name</span>
          <input
            {...register("name", {
              required: "this field is required",
              minLength: {
                value: 3,
                message: "Name must have at least 3 characters",
              },
            })}
            type="text"
            placeholder="Name"
          />
          {errors.name && (
            <div className={styles.errorMsg}>{errors.name.message}</div>
          )}
          <br />
          <span>Your thoughts</span>
          <textarea
            {...register("feedback", {
              required: "this field is required",
              minLength: {
                value: 4,
                message: "Feedback must have at least 4 characters",
              },
            })}
            placeholder="Your thoughts"
          />
          {errors.feedback && (
            <div className={styles.errorMsg}>{errors.feedback.message}</div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>

     
    </>
  );
}
