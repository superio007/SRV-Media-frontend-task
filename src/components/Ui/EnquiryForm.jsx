import { useForm } from "react-hook-form";
import GradientButton from "./GradientButton";
import styles from "./EnquiryForm.module.css";

const EnquiryForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <aside
      className={styles["enquiry-form"]}
      aria-labelledby="enquiry-form-heading"
    >
      <h2 id="enquiry-form-heading" className={styles["enquiry-form__heading"]}>
        Enquire Now
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles["enquiry-form__form"]}
        noValidate
      >
        <fieldset className={styles["enquiry-form__fieldset"]}>
          <legend className="sr-only">Contact Information</legend>

          <div className={styles["enquiry-form__field"]}>
            <label htmlFor="parentName" className="sr-only">
              Parent's Name
            </label>
            <input
              id="parentName"
              type="text"
              placeholder="Parent's Name"
              className={styles["enquiry-form__input"]}
              aria-invalid={errors.parentName ? "true" : "false"}
              aria-describedby={
                errors.parentName ? "parentName-error" : undefined
              }
              {...register("parentName", {
                required: "Parent name is required",
              })}
            />
          </div>
          {errors.parentName && (
            <p
              id="parentName-error"
              className={styles["enquiry-form__error"]}
              role="alert"
            >
              {errors.parentName.message}
            </p>
          )}

          <div className={styles["enquiry-form__field"]}>
            <label htmlFor="phone" className="sr-only">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone number"
              className={styles["enquiry-form__input"]}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Enter a valid phone number",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p
              id="phone-error"
              className={styles["enquiry-form__error"]}
              role="alert"
            >
              {errors.phone.message}
            </p>
          )}

          <div className={styles["enquiry-form__field"]}>
            <label htmlFor="grade" className="sr-only">
              Which grade are you looking for?
            </label>
            <textarea
              id="grade"
              placeholder="Which grade are you looking for?"
              className={styles["enquiry-form__textarea"]}
              aria-invalid={errors.grade ? "true" : "false"}
              aria-describedby={errors.grade ? "grade-error" : undefined}
              {...register("grade", {
                required: "Grade information is required",
              })}
            />
          </div>
          {errors.grade && (
            <p
              id="grade-error"
              className={styles["enquiry-form__error"]}
              role="alert"
            >
              {errors.grade.message}
            </p>
          )}
        </fieldset>

        <GradientButton label="Submit" color={true} size={true} type="submit" />
      </form>
    </aside>
  );
};

export default EnquiryForm;
