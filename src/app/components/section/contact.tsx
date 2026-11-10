"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus("Sending...");

      const response = await fetch("http://localhost:5001/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully! ✓");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050b14] px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[130px]" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Let&apos;s start a conversation
            </h3>

            <p className="max-w-lg leading-relaxed text-[#94a3b8]">
              I&apos;m always interested in new opportunities, exciting
              projects, and collaborating with great people.
            </p>

            <div className="flex items-center gap-4 rounded-2xl border border-[#293548] bg-[#101827] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-[#60a5fa]">
                <Mail size={23} />
              </div>

              <div>
                <p className="text-sm text-[#94a3b8]">Email</p>
                <a
                  href="mailto:jrrodro32@gmail.com"
                  className="font-medium text-white hover:text-[#60a5fa]"
                >
                  jrrodro32@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-[#293548] bg-[#101827] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-[#c084fc]">
                <MapPin size={23} />
              </div>

              <div>
                <p className="text-sm text-[#94a3b8]">Location</p>
                <p className="font-medium text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#1e3655] bg-[#101827] p-7 sm:p-9"
          >
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#cbd5e1]"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-[#293548] bg-[#0b1322] px-4 py-3.5 text-white outline-none transition placeholder:text-[#64748b] focus:border-[#4f8cff]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#cbd5e1]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-[#293548] bg-[#0b1322] px-4 py-3.5 text-white outline-none transition placeholder:text-[#64748b] focus:border-[#4f8cff]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#cbd5e1]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none rounded-xl border border-[#293548] bg-[#0b1322] px-4 py-3.5 text-white outline-none transition placeholder:text-[#64748b] focus:border-[#a238f5]"
                />
              </div>

              {status && (
                <p className="text-center text-sm text-[#94a3b8]">
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#a238f5] px-6 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Send Message
                <Send size={19} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;