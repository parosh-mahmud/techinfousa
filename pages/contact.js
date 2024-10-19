import React from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiPhone, FiUser, FiMessageSquare } from "react-icons/fi";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // You can add the API submission logic here if needed.
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="mt-4 text-gray-600">
            We’d love to hear from you! Whether you have a question about
            services, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="mb-4">
                  <div className="relative">
                    <FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                      className={`w-full py-3 pl-10 pr-4 bg-gray-100 rounded-md border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } outline-none focus:ring-2 focus:ring-indigo-500`}
                      type="text"
                      placeholder="Full Name"
                      {...register("name", {
                        required: "Full name is required",
                        minLength: { value: 2, message: "Name is too short" },
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative">
                    <FiMail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                      className={`w-full py-3 pl-10 pr-4 bg-gray-100 rounded-md border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } outline-none focus:ring-2 focus:ring-indigo-500`}
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Email is not valid",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative">
                    <FiPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <input
                      className={`w-full py-3 pl-10 pr-4 bg-gray-100 rounded-md border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } outline-none focus:ring-2 focus:ring-indigo-500`}
                      type="tel"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Phone number is not valid",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <FiMessageSquare className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                    <textarea
                      className={`w-full py-3 pl-10 pr-4 bg-gray-100 rounded-md border ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      } outline-none focus:ring-2 focus:ring-indigo-500`}
                      rows={5}
                      placeholder="Your Message"
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  className={`w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md font-semibold ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-3">
            <div className="p-8 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Feel free to reach out to us through phone, email, or by
                visiting our office. We’re here to help!
              </p>
              <ul className="mt-6 text-gray-600">
                <li className="flex items-center mb-4">
                  <FiPhone className="text-gray-500 w-6 h-6 mr-2" />
                  <span>+1 234 567 8900</span>
                </li>
                <li className="flex items-center mb-4">
                  <FiMail className="text-gray-500 w-6 h-6 mr-2" />
                  <span>support@techinfousa.com</span>
                </li>
                <li className="flex items-center">
                  <FiMessageSquare className="text-gray-500 w-6 h-6 mr-2" />
                  <span>1234 TechInfo Street, Suite 500, NY, USA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
