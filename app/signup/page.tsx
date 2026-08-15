"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/SiteHeader";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "krest_user",
        JSON.stringify({
          name: form.name || "New User",
          email: form.email,
        })
      );

      router.push("/dashboard");
    }, 900);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-paper">
        <div className="mx-auto grid max-w-content gap-16 px-6 py-16 lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <div className="hidden lg:block">
            <span className="rounded-full bg-gold-200 px-4 py-1 text-sm font-medium text-pine-900">
              Premium Banking
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold leading-tight text-pine-900">
              Open your USD account in minutes
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-pine-700">
              Get a US account number, virtual dollar card and powerful
              financial tools designed to help you manage money globally.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "No monthly maintenance fees",
                "Receive ACH and wire transfers",
                "Instant virtual dollar card",
                "Secure and insured banking experience",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pine-500 text-white">
                    ✓
                  </div>
                  <span className="text-pine-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="mx-auto w-full max-w-md rounded-3xl border border-rule bg-white p-8 shadow-xl">
            <h2 className="font-display text-3xl font-bold text-pine-900">
              Create Account
            </h2>

            <p className="mt-2 text-sm text-pine-700">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-gold-500 hover:text-gold-700"
              >
                Sign In
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-pine-900"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Billy Adams"
                  required
                  className="w-full rounded-xl border border-rule bg-white px-4 py-3 outline-none transition focus:border-pine-500 focus:ring-2 focus:ring-pine-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-pine-900"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-rule bg-white px-4 py-3 outline-none transition focus:border-pine-500 focus:ring-2 focus:ring-pine-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-pine-900"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="+1 555 000 0000"
                  required
                  className="w-full rounded-xl border border-rule bg-white px-4 py-3 outline-none transition focus:border-pine-500 focus:ring-2 focus:ring-pine-100"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-pine-900"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  name="password"
                  minLength={8}
                  value={form.password}
                  onChange={update}
                  placeholder="Minimum 8 characters"
                  required
                  className="w-full rounded-xl border border-rule bg-white px-4 py-3 outline-none transition focus:border-pine-500 focus:ring-2 focus:ring-pine-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-pine-700 py-3 font-semibold text-white transition hover:bg-pine-900 disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Open My USD Account"}
              </button>

         
            </form>
          </div>
        </div>
      </main>
    </>
  );
}