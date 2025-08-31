"use client";

import Typography from "@/components/typography/Typography";
import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send.");
      }
    } catch (err) {
      setStatus("⚠️ Something went wrong.");
    }
  };

  return (
    <div className="relative mt-16" id="contact">
      <main className="">
        <section className="relative px-6   overflow-hidden ">
          <div className="">
            <div className="space-y-3">
              <p className="text-primary flex items-center gap-2 font-bold">
                <span className="bg-primary block h-1 w-7" />
                Contact
              </p>
              <Typography variant="h2"> Get In Touch</Typography>
            </div>
          </div>
        </section>
        <div className="md:flex  justify-center gap-14">
          <div className="order-last md:order-first">
            <section className="relative px-6 py-20 ">
              <div className="relative z-10 max-w-lg mx-auto space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px  bg-zinc-700" />
                    <span className="text-sm tracking-wider uppercase text-zinc-400 font-mono">
                      Contact Info
                    </span>
                  </div>
                  <div className="space-y-6">
                    <div className="group animate-in fade-in duration-700 slide-in-from-bottom-4">
                      <a
                        href="mailto:jubayerahmed.dev@gmail.com"
                        className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                      >
                        <div className="flex h-12 w-12 items-center justify-center  bg-zinc-800 border  border-zinc-700  group-hover:border-zinc-600 transition-colors duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-mail h-5 w-5  text-zinc-300"
                          >
                            <rect width={20} height={16} x={2} y={4} rx={2} />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs tracking-wider uppercase  text-zinc-400 font-mono mb-1">
                            Email
                          </div>
                          <div className=" text-zinc-100 font-light  group-hover:text-zinc-200 transition-colors duration-300">
                            jubayerahmed.dev@gmail.com
                          </div>
                        </div>
                        <div className="w-4 h-px bg-zinc-300 bg-zinc-700 group-hover:w-6 transition-all duration-300" />
                      </a>
                    </div>
                    <div
                      className="group animate-in fade-in duration-700 slide-in-from-bottom-4"
                      style={{ animationDelay: "150ms" }}
                    >
                      <a
                        href="https://maps.google.com/?q=sylhet,bangladesh"
                        className="flex items-center gap-4 p-4 bg-zinc-950 border  border-zinc-800  hover:border-zinc-700 transition-all duration-300"
                      >
                        <div className="flex h-12 w-12 items-center justify-center  bg-zinc-800 border  border-zinc-700  group-hover:border-zinc-600 transition-colors duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-map-pin h-5 w-5  text-zinc-300"
                          >
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                            <circle cx={12} cy={10} r={3} />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs tracking-wider uppercase  text-zinc-400 font-mono mb-1">
                            Location
                          </div>
                          <div className="text-zinc-100 font-light  group-hover:text-zinc-200 transition-colors duration-300">
                            Sylhet, Bangladesh
                          </div>
                        </div>
                        <div className="w-4 h-px bg-zinc-300 bg-zinc-700 group-hover:w-6 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px  bg-zinc-700" />
                    <span className="text-sm tracking-wider uppercase text-zinc-400 font-mono">
                      Social Links
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                      style={{ animationDelay: "300ms" }}
                    >
                      <a
                        href="https://github.com/mr-jubayer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center h-16  bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                        title="GitHub"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="h-6 w-6 text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                      </a>
                    </div>
                    <div
                      className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                      style={{ animationDelay: "450ms" }}
                    >
                      <a
                        href="https://linkedin.com/in/jubayer-ahmed46"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center h-16  bg-zinc-950 border  border-zinc-800  hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                        title="LinkedIn"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="h-6 w-6 text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </a>
                    </div>

                    <div
                      className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                      style={{ animationDelay: "750ms" }}
                    >
                      <a
                        href="https://www.facebook.com/jubayerahmed.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center h-16 bg-zinc-950 border  border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                        title="Facebook"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 512 512"
                          className="h-6 w-6 text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                        </svg>
                      </a>
                    </div>
                    <div
                      className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                      style={{ animationDelay: "900ms" }}
                    >
                      <a
                        href="https://x.com/Jubayer_486"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center h-16 bg-zinc-950 border  border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                        title="Threads"
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth={0}
                          viewBox="0 0 16 16"
                          className="h-6 w-6 text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-8 border-t border-zinc-800">
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    I typically respond within 24 hours. Looking forward to
                    hearing from you!
                  </p>
                </div>
              </div>
            </section>
          </div>
          <section className="relative px-6 py-20">
            <div className="relative z-10 max-w-lg mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-light text-zinc-100 tracking-tight">
                  Start a Conversation
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {" "}
                <div className="grid gap-6 md:grid-cols-2">
                  {" "}
                  <div
                    className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                    style={{ animationDelay: "0ms" }}
                  >
                    {" "}
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-zinc-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring ring-zinc-700 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-900 border-zinc-800 focus:border-zinc-600 text-white transition-colors duration-300"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required=""
                      defaultValue=""
                    />{" "}
                  </div>{" "}
                  <div
                    className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                    style={{ animationDelay: "100ms" }}
                  >
                    {" "}
                    <input
                      type="email"
                      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-zinc-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring ring-zinc-700 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-900 border-zinc-800 focus:border-zinc-600 text-white transition-colors duration-300"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required=""
                      value={formData.email}
                      onChange={handleChange}
                      defaultValue=""
                    />{" "}
                  </div>{" "}
                </div>{" "}
                <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 delay-200">
                  {" "}
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-zinc-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring ring-zinc-700 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-900 border-zinc-800 focus:border-zinc-600 text-white transition-colors duration-300"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required=""
                    defaultValue=""
                  />{" "}
                </div>{" "}
                <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 delay-300">
                  {" "}
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-zinc-700 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring ring-zinc-700 focus-visible:ring-zinc-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-900 border-zinc-800 focus:border-zinc-600 text-white transition-colors duration-300"
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required=""
                    defaultValue={""}
                  />{" "}
                </div>{" "}
                <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 delay-400">
                  {" "}
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 border-zinc-100 hover:border-zinc-800 dark:hover:border-zinc-200 h-10 px-4 w-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 border-0 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 group"
                    type="submit"
                  >
                    {" "}
                    <div className="flex items-center gap-2">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-send w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        {" "}
                        <path d="m22 2-7 20-4-9-9-4Z" />{" "}
                        <path d="M22 2 11 13" />{" "}
                      </svg>{" "}
                      Send Message{" "}
                    </div>{" "}
                  </button>{" "}
                </div>{" "}
              </form>

              {status && <p className="mt-4">{status}</p>}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
export default ContactSection;
