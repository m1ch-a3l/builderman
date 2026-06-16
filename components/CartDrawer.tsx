"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function CartDrawer() {
  const { items, count, subtotal, remove, setQty, clear } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            aria-label={`Open cart — ${count} item${count !== 1 ? "s" : ""}`}
            className="relative p-2 transition-colors"
          />
        }
      >
        <ShoppingCart size={20} />
        {count > 0 && (
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-forest text-parchment text-[10px] font-body font-medium px-1 leading-none">
            {count}
          </span>
        )}
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-l border-stone/20 w-full sm:w-[420px] flex flex-col p-0"
        style={{ backgroundColor: "#F8F6F1" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/15">
          <h2 className="font-display text-xl font-semibold text-ink">
            Your Cart {count > 0 && <span className="text-stone font-normal text-base">({count})</span>}
          </h2>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="text-[10px] tracking-widest uppercase text-stone hover:text-ink transition-colors font-body"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
              <ShoppingCart size={40} className="text-stone/30" />
              <p className="font-display text-lg text-stone">Your cart is empty</p>
              <p className="text-stone/60 text-sm font-body">
                Browse the store and add a book to get started.
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-2 text-[10px] tracking-[0.2em] uppercase text-ink border-b border-ink/20 pb-px hover:border-ink transition-colors font-body"
              >
                Continue browsing →
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-stone/10">
              {items.map(({ book, quantity }) => (
                <li key={book.slug} className="flex gap-4 px-6 py-5">
                  {/* Cover */}
                  <Link
                    href={`/books/${book.slug}`}
                    onClick={() => setOpen(false)}
                    className="relative shrink-0 w-[64px] aspect-[2/3] overflow-hidden"
                  >
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      className="object-cover object-right"
                      sizes="64px"
                    />
                  </Link>

                  {/* Info + controls */}
                  <div className="flex flex-col flex-1 gap-1 min-w-0">
                    <Link
                      href={`/books/${book.slug}`}
                      onClick={() => setOpen(false)}
                      className="font-display text-base font-semibold text-ink leading-snug hover:text-forest transition-colors line-clamp-2"
                    >
                      {book.title}
                    </Link>
                    <p className="text-[10px] uppercase tracking-widest text-stone/60 font-body">
                      {book.genre}
                    </p>
                    <p className="font-display text-base font-bold text-ink mt-1">
                      ${((book.price ?? 0) * quantity).toFixed(2)}
                    </p>

                    {/* Quantity row */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-stone/20">
                        <button
                          onClick={() => setQty(book.slug, quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center text-stone hover:text-ink transition-colors"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-sm font-body text-ink select-none">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQty(book.slug, quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center text-stone hover:text-ink transition-colors"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(book.slug)}
                        aria-label={`Remove ${book.title}`}
                        className="text-stone/40 hover:text-red-500 transition-colors p-1"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-stone/15 px-6 py-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-stone text-sm font-body tracking-wide">Subtotal</span>
              <span className="font-display text-2xl font-bold text-ink">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-stone/60 text-xs font-body -mt-2">
              Shipping calculated at checkout
            </p>
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-4 bg-ink text-parchment text-xs font-body font-medium tracking-[0.2em] uppercase hover:bg-forest transition-colors"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="w-full text-center text-[10px] tracking-widest uppercase text-stone hover:text-ink transition-colors font-body"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
