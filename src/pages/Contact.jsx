import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="w-full max-w-[900px]"
      >
        <div className="relative bg-white dark:bg-gray-800 rounded-[14px] p-8 sm:p-10 shadow-[0_18px_60px_rgba(30,64,175,0.12)] dark:shadow-[0_18px_60px_rgba(0,0,0,0.3)] transition-colors duration-500">
          <h2 className="text-[40px] leading-none text-[#3342A6] dark:text-[#A5B4FC] font-semibold mb-3 font-['Poppins',ui-sans-serif]">
            Get In Touch
          </h2>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700 rounded-lg px-6 py-4 text-center font-medium transition-colors duration-500"
            >
              ✅ Message sent! I’ll reply as soon as possible.
            </motion.div>
          ) : (
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="First Name" name="firstName" value={data.firstName} onChange={onChange} />
                <Field label="Last Name" name="lastName" value={data.lastName} onChange={onChange} />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field type="email" label="Email" name="email" value={data.email} onChange={onChange} />
                <Field label="Phone" name="phone" value={data.phone} onChange={onChange} />
              </div>

              {/* Address */}
              <Field label="Address" name="address" value={data.address} onChange={onChange} />

              {/* Message */}
              <Field
                as="textarea"
                rows={6}
                label="Type your message here"
                name="message"
                value={data.message}
                onChange={onChange}
                darker
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mx-auto block w-40 h-12 rounded-full text-white font-medium shadow-md
                           bg-gradient-to-r from-[#2E56FF] to-[#3A78FF] hover:from-[#284CFF] hover:to-[#3A6CFF]
                           dark:from-indigo-600 dark:to-blue-500 dark:hover:from-indigo-500 dark:hover:to-blue-400
                           transition-all duration-300"
              >
                Submit
              </motion.button>
            </motion.form>
          )}

          {sent && (
            <span className="absolute left-6 bottom-4 text-[#20B486] dark:text-green-300 text-sm transition-colors duration-500">
              Thanks for submitting!
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Field = ({
  label,
  name,
  value,
  onChange,
  as = "input",
  type = "text",
  rows,
  darker = false,
}) => {
  const Base = as;
  return (
    <div>
      <label className="block text-[#3342A6] dark:text-[#A5B4FC] text-sm font-medium mb-2 transition-colors duration-500">
        {label}
      </label>
      <Base
        {...(rows ? { rows } : {})}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`${
          darker
            ? "bg-[#BAC6FF] dark:bg-[#1E293B]"
            : "bg-[#E6EAFF] dark:bg-[#334155]"
        } w-full rounded-[12px] px-4 py-3 text-[#3342A6] dark:text-gray-200 placeholder-[#5B66B5]
           dark:placeholder-gray-400 border border-transparent focus:border-[#90A0FF] dark:focus:border-indigo-400
           focus:ring-0 outline-none transition-colors duration-500`}
      />
    </div>
  );
};

export default Contact;
