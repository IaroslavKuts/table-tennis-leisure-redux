import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectCurrentColor } from "../appSettingsSlice";

//Component that gives to an user an option to send a report to administrator
const ContactUs = () => {
  const currentColor = useSelector(selectCurrentColor);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (data) => {
    // fetch(
    //   process.env.REACT_APP_SEND_USER_COMMENT,
    //   corsMaker({ method: "POST", body: data })
    // );
  };

  return (
    <div
      name="contact"
      className="w-full h-screen  bg-zinc-100  dark:bg-gray-800 flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        className="flex flex-col  max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p
            style={{ borderColor: currentColor }}
            className="text-4xl font-bold inline border-b-4 text-black dark:text-white"
          >
            Contact Us
          </p>
        </div>

        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          {...register("message")}
        />
        <button
          style={{ backgroundColor: currentColor }}
          className="w-64 mx-auto rounded-full py-4 my-4 text-white "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
