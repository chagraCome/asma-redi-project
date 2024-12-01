import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./SecForm.module.css";
import { Divider } from "antd";

export default function SecForm({ recipeId, recipeName }) {
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
    <div style={{ margin: 60 }}>
      <Divider>
        <h2>Feedback</h2>
      </Divider>
      <div className={styles.reviewForm}>
        <h3>Write your thoughts</h3>
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

      {/* Display feedbacks */}
      <div>
        <h3>All Feedbacks for Recipe {recipeName}</h3>
        {feedbacks[recipeId] && feedbacks[recipeId].length > 0 ? (
          feedbacks[recipeId].map((item, index) => (
            <div key={index}>
              <p>
                <strong>{item.name}:</strong>
              </p>
              <p className={styles.feedbackText}>{item.feedback}</p>
              <Divider />
            </div>
          ))
        ) : (
          <div>There are no feedbacks yet</div>
        )}
      </div>
    </div>
  );
}
