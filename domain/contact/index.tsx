"use client";
import Button from "@/components/button";
import MoreBooks from "@/components/morebooks";
import React, { useState } from "react";
import { sendEmail } from "@/app/lib/sendEmail";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Contacts = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setLoading(true);

    try {
      await sendEmail({
        to: "kasi0305@gmail.com",
        name: `${formData.firstName} ${formData.lastName}`,
        subject: "Client Contact Information",
        body: `<body>
    <h3>Client information</h3>
    <p>Name: ${formData.firstName} ${formData.lastName}</p>
    <p>Email: ${formData.email}</p>
    <div>Message: ${formData.message}</div>
</body>`,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      toast.success("Email sent successfully!", {
        position: "top-right",
      });
      router.push("/contacts");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full my-4 bg-white py-[1rem] lg:py-[2rem] lg:px-[8rem] gap-4 px-[1rem]">
      <Toaster />
      <div className="flex lg:flex-row flex-col justify-between w-full gap-16">
        <div className="w-full">
          <h1 className="lg:text-5xl text-2xl font-custom w-full my-3">CONTACT US </h1>
          <p>
            There&apos;s nothing quite like the thrill of receiving heartfelt messages from my cherished readers. Each email is like a precious treasure, offering insights, sharing experiences, and forging connections that enrich both my writing
            journey and the lives of those who engage with my work. If you feel moved to reach out, I wholeheartedly invite you to do so. Whether you have questions, feedback, or simply want to share your thoughts, I&apos;m here, eager to listen and
            engage in meaningful conversations. Don&apos;t hesitate to click the link provided to send me an email directly, or if you prefer, take a moment to fill out the form below. Your words mean the world to me, and I deeply appreciate the time
            and effort you take to connect.
          </p>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-[1rem]">
              <div className="w-full flex flex-col">
                <label htmlFor="">First Name</label>
                <input id="firstName" name="firstName" className="border bg-[#E8E0DA] h-10 px-2" type="text" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="">Last Name</label>
                <input id="lastName" name="lastName" className="border h-10 bg-[#E8E0DA] px-2" type="text" required value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="">Email</label>
              <input id="email" name="email" className="border h-10 bg-[#E8E0DA] px-2" type="email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="">Message</label>

              <textarea id="message" name="message" className="border bg-[#E8E0DA] h-40 p-2" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="mt-4">
              <Button title="Send" width="20%" height="40px" loading={loading} type="submit" />
            </div>
          </form>
        </div>
      </div>
   
    </section>
  );
};

export default Contacts;
