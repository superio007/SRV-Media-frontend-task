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
    <div className="w-103.5 rounded-xl p-6 bg-linear-to-r relative from-[#00000020] to-[#06153254]">
      <h2 className="text-3xl font-bold text-white text-start mb-6">
        Enquire Now
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="bg-[#ffffff2a] rounded-md border p-3">
          <input
            type="text"
            placeholder="Parent’s Name"
            className="outline-none border-none w-full text-white text-xl bg-transparent"
            {...register("parentName", { required: "Parent name is required" })}
          />
        </div>
        {errors.parentName && (
          <p className="text-red-400 text-sm">{errors.parentName.message}</p>
        )}

        <div className="bg-[#ffffff2a] rounded-md border p-3">
          <input
            type="tel"
            placeholder="Phone number"
            className="outline-none border-none w-full text-white text-xl bg-transparent"
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
          <p className="text-red-400 text-sm">{errors.phone.message}</p>
        )}

        <div className="bg-[#ffffff2a] rounded-md border p-3">
          <textarea
            placeholder="Which grade are you looking for?"
            className="outline-none border-none w-full text-white text-xl bg-transparent resize-none"
            {...register("grade", {
              required: "Grade information is required",
            })}
          />
        </div>
        {errors.grade && (
          <p className="text-red-400 text-sm">{errors.grade.message}</p>
        )}

        <GradientButton label="Submit" color={true} size={true} type="submit" />
      </form>
    </div>
  );
};

export default EnquiryForm;
