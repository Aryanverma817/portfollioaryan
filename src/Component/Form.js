import React, { useState } from "react";
import NavBar from "./NavBar";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    helpOption: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
    <NavBar></NavBar>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-black ">
        <div className=" grid text-white r">
            <div className="max-w-md md:mx-au lg:mx-36 my-12  text-start "> 
                <h1 className="mt-40 text-5xl font-[Prompt] tracking-[10px] font-extrabold" >Let's find  solutions </h1>
                <h1 className="text-5xl font-[Prompt]  tracking-[8px]  font-extrabold text-pink-600">
                    togather?
                </h1>
                <p className="font-mono font-extrabold tracking-[2px] text-start   my-7  text-[#cccc33]"> Contact</p>
                <p className="font-mono font-extrabold tracking-[1px] text-start  my-7 "> Fill the form or just use the contact below.if you need to put project on the move,lets work on it.</p>
               <a className=" font-mono font-extrabold tracking-[1px] hover:text-pink-600  transition delay-150 duration-300 ease-in-outmy-7  text-xl" href="mailto:aryanverma7065@gmail.com">aryanverma7065@gmail.com</a>
            </div>
          
        </div>
        <div className=" grid ">
        <div className="max-w-md lg:mx-36 my-12   items-center mt-10 p-6 bg-black shadow-md rounded-none">
      <h2 className="mt-5 mb-6 "></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-none"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-none"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white">How can I help you?</label>
          <select
            name="helpOption"
            value={formData.helpOption}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-none"
            required
          >
            <option value="">Select an option</option>
            <option value="web-development">Web Development</option>
            <option value="android-development">Android Development</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-white">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-none"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="border-2 mt-4 text-white  delay-150 duration-300 ease-in-out border-pink-600 px-6 py-2 my-4 text-base font-mono hover:text-blue-950  hover:bg-pink-600 hover:border-pink-600 tracking-widest font-semibold">
          Submit Form
        </button>
      </form>
    </div>
        </div>

    </div>
    </div>
  );
}
