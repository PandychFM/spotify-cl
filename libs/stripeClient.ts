import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromis: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromis) {
    stripePromis = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
    );
  }

  return stripePromis;
};
