import { useForm } from "react-hook-form";
import GradientButton from "./GradientButton";

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
      className="w-103.5 rounded-xl p-6 bg-linear-to-r relative from-[#00000020] to-[#06153254]"
      aria-labelledby="enquiry-form-heading"
    >
      <h2
        id="enquiry-form-heading"
        className="text-3xl font-bold text-white text-start mb-6"
      >
        Enquire Now
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
        noValidate
      >
        <fieldset className="contents">
          <legend className="sr-only">Contact Information</legend>

          <div className="bg-[#ffffff2a] rounded-md border p-3">
            <label htmlFor="parentName" className="sr-only">
              Parent's Name
            </label>
            <input
              id="parentName"
              type="text"
              placeholder="Parent's Name"
              className="outline-none border-none w-full text-white text-xl bg-transparent"
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
              className="text-red-400 text-sm"
              role="alert"
            >
              {errors.parentName.message}
            </p>
          )}

          <div className="bg-[#ffffff2a] rounded-md border p-3">
            <label htmlFor="phone" className="sr-only">
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone number"
              className="outline-none border-none w-full text-white text-xl bg-transparent"
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
            <p id="phone-error" className="text-red-400 text-sm" role="alert">
              {errors.phone.message}
            </p>
          )}

          <div className="bg-[#ffffff2a] rounded-md border p-3">
            <label htmlFor="grade" className="sr-only">
              Which grade are you looking for?
            </label>
            <textarea
              id="grade"
              placeholder="Which grade are you looking for?"
              className="outline-none border-none w-full text-white text-xl bg-transparent resize-none"
              aria-describedby={errors.grade ? "grade-error" : undefined}
              {...register("grade", {
                required: "Grade information is required",
              })}
            />
          </div>
          {errors.grade && (
            <p id="grade-error" className="text-red-400 text-sm" role="alert">
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
