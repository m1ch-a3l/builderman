"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ArrowLeft, ShoppingBag, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/lib/cart-context";

/* ── Paystack type declaration ── */
declare global {
  interface Window {
    PaystackPop: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        firstname?: string;
        lastname?: string;
        phone?: string;
        metadata?: Record<string, unknown>;
        callback: (response: { reference: string; status: string }) => void;
        onClose: () => void;
      }) => { openIframe: () => void };
    };
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

const EMPTY: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  postalCode: "",
};

const SHIPPING = 5.0;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "";
const CURRENCY = process.env.NEXT_PUBLIC_PAYSTACK_CURRENCY ?? "GHS";

function uniqueRef() {
  return `BLD-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export default function CheckoutPage() {
  const { items, subtotal, count, clear } = useCart();
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [paying, setPaying] = useState(false);
  const [orderRef, setOrderRef] = useState<string | null>(null);
  const [payCancelled, setPayCancelled] = useState(false);

  const total = subtotal + SHIPPING;

  /* ── Validation ── */
  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.country.trim()) e.country = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    setPayCancelled(false);
  }

  /* ── Submit → open Paystack popup ── */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (!window.PaystackPop) {
      alert("Payment system still loading — please wait a moment and try again.");
      return;
    }

    setPaying(true);
    setPayCancelled(false);

    const handler = window.PaystackPop.setup({
      key: PUBLIC_KEY,
      email: form.email,
      amount: Math.round(total * 100), // Paystack expects smallest currency unit
      currency: CURRENCY,
      ref: uniqueRef(),
      firstname: form.firstName,
      lastname: form.lastName,
      phone: form.phone || undefined,
      metadata: {
        custom_fields: [
          {
            display_name: "Shipping Address",
            variable_name: "shipping_address",
            value: `${form.address}, ${form.city}, ${form.postalCode}, ${form.country}`,
          },
          {
            display_name: "Order Items",
            variable_name: "order_items",
            value: items
              .map((i) => `${i.book.title} x${i.quantity}`)
              .join(", "),
          },
        ],
      },
      callback: (response) => {
        setPaying(false);
        setOrderRef(response.reference);
        clear();
      },
      onClose: () => {
        setPaying(false);
        setPayCancelled(true);
      },
    });

    handler.openIframe();
  }

  /* ── Success screen ── */
  if (orderRef) {
    return (
      <>
        <Navbar />
        <main className="bg-parchment pt-16 min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6">
          <CheckCircle2 size={64} className="text-forest" />
          <h1 className="font-display text-4xl font-bold text-ink">Order Confirmed!</h1>
          <p className="text-stone max-w-sm font-body leading-relaxed">
            Thank you, {form.firstName}. A receipt has been sent to{" "}
            <span className="text-ink font-medium">{form.email}</span>.
          </p>
          <p className="text-stone/50 text-xs font-body tracking-widest uppercase">
            Reference: {orderRef}
          </p>
          <Link
            href="/store"
            className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-parchment text-xs font-body tracking-[0.2em] uppercase hover:bg-forest transition-colors"
          >
            <ShoppingBag size={14} />
            Back to Store
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  /* ── Empty cart ── */
  if (count === 0) {
    return (
      <>
        <Navbar />
        <main className="bg-parchment pt-16 min-h-screen flex flex-col items-center justify-center px-6 text-center gap-6">
          <ShoppingBag size={56} className="text-stone/30" />
          <h1 className="font-display text-3xl font-bold text-ink">Your cart is empty</h1>
          <Link
            href="/store"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-ink text-parchment text-xs font-body tracking-[0.2em] uppercase hover:bg-forest transition-colors"
          >
            Browse the Store
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      {/* Load Paystack inline script */}
      <Script src="https://js.paystack.co/v1/inline.js" strategy="afterInteractive" />

      <Navbar />
      <main className="bg-parchment pt-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 lg:py-24">

          <Link
            href="/store"
            className="inline-flex items-center gap-2 text-stone hover:text-ink text-xs tracking-widest uppercase font-body transition-colors mb-10"
          >
            <ArrowLeft size={13} />
            Back to Store
          </Link>

          <h1 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-12">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

            {/* ── Form ── */}
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10">

              <fieldset className="flex flex-col gap-5">
                <legend className="font-display text-xl font-semibold text-ink mb-1">
                  Contact Information
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} error={errors.firstName} />
                  <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} error={errors.lastName} />
                </div>
                <Field label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} />
                <Field label="Phone (optional)" name="phone" type="tel" value={form.phone} onChange={handleChange} />
              </fieldset>

              <fieldset className="flex flex-col gap-5">
                <legend className="font-display text-xl font-semibold text-ink mb-1">
                  Shipping Address
                </legend>
                <Field label="Street Address" name="address" value={form.address} onChange={handleChange} error={errors.address} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="City" name="city" value={form.city} onChange={handleChange} error={errors.city} />
                  <Field label="Postal / ZIP Code" name="postalCode" value={form.postalCode} onChange={handleChange} />
                </div>
                <Field label="Country" name="country" value={form.country} onChange={handleChange} error={errors.country} />
              </fieldset>

              {/* Payment cancelled notice */}
              {payCancelled && (
                <div className="bg-amber-50 border border-amber-200 px-5 py-4">
                  <p className="text-amber-800 text-sm font-body">
                    Payment was cancelled. Your order has not been placed. Click below to try again.
                  </p>
                </div>
              )}

              {/* Key missing warning (dev only) */}
              {PUBLIC_KEY.startsWith("pk_test_xxx") && (
                <div className="bg-red-50 border border-red-200 px-5 py-4">
                  <p className="text-red-700 text-sm font-body">
                    <span className="font-semibold">Developer note:</span> Set{" "}
                    <code className="text-xs bg-red-100 px-1 py-0.5">NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY</code>{" "}
                    in <code className="text-xs bg-red-100 px-1 py-0.5">.env.local</code> to enable live payments.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={paying}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-forest text-parchment text-xs font-body font-medium tracking-[0.2em] uppercase hover:bg-forest-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {paying ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Opening Payment…
                  </>
                ) : (
                  <>
                    Pay {CURRENCY} {total.toFixed(2)}
                  </>
                )}
              </button>

              <p className="text-stone/50 text-xs font-body -mt-6">
                Secured by{" "}
                <span className="text-stone">Paystack</span> — your card details never touch our servers.
              </p>
            </form>

            {/* ── Order Summary ── */}
            <aside className="bg-cream border border-stone/15 p-6 flex flex-col gap-5 lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-semibold text-ink">Order Summary</h2>

              <ul className="flex flex-col divide-y divide-stone/10">
                {items.map(({ book, quantity }) => (
                  <li key={book.slug} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                    <div className="relative w-12 aspect-[2/3] shrink-0 overflow-hidden">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover object-right"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display text-sm font-semibold text-ink leading-snug line-clamp-2">
                        {book.title}
                      </p>
                      <p className="text-[10px] text-stone/60 font-body mt-0.5">Qty: {quantity}</p>
                    </div>
                    <span className="font-body text-sm font-medium text-ink shrink-0">
                      {CURRENCY} {((book.price ?? 0) * quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-stone/15 pt-4 flex flex-col gap-2">
                <div className="flex justify-between text-sm font-body text-stone">
                  <span>Subtotal</span>
                  <span>{CURRENCY} {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-body text-stone">
                  <span>Shipping</span>
                  <span>{CURRENCY} {SHIPPING.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-display text-lg font-bold text-ink border-t border-stone/15 pt-3 mt-1">
                  <span>Total</span>
                  <span>{CURRENCY} {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Paystack badge */}
              <div className="flex items-center justify-center gap-2 pt-2 border-t border-stone/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-stone/40">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] text-stone/40 font-body tracking-widest uppercase">
                  Secured by Paystack
                </span>
              </div>
            </aside>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-[10px] tracking-[0.2em] uppercase text-stone font-body"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={name}
        className={`bg-white border px-4 py-3 text-sm font-body text-ink placeholder:text-stone/30 outline-none focus:ring-2 focus:ring-forest/30 transition-shadow ${
          error ? "border-red-400" : "border-stone/20 focus:border-forest/50"
        }`}
      />
      {error && <p className="text-red-500 text-xs font-body">{error}</p>}
    </div>
  );
}
