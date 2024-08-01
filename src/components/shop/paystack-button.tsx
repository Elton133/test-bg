import { PaystackButton } from "react-paystack";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaystackButtonProps {
  onSuccess: () => void;
  onClose: () => void;
  email: string;
  amount: number;
  reference: string;
  loading?: boolean;
  disabled?: boolean;
}
const KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

const PaystackCustomButton = ({
  reference,
  amount,
  email,
  onClose,
  onSuccess,
  loading,
  disabled,
}: PaystackButtonProps) => {
  return (
    <PaystackButton
      reference={reference}
      email={email}
      currency={"GHS"}
      disabled={disabled || loading || !KEY}
      amount={amount * 100}
      onSuccess={onSuccess}
      onClose={onClose}
      publicKey={KEY as string}
      // @ts-ignore
      text={
        loading ? (
          <LoaderCircle className={"animate-spin"} />
        ) : (
          `Make Payment (GHS ${amount})`
        )
      }
      className={cn(
        "bg-primary text-white text-sm w-full font-semibold py-2 px-4 rounded-md cursor-pointer",
        {
          "cursor-not-allowed": disabled || loading,
          "bg-gray-300": disabled || loading,
        },
      )}
    />
  );
};

export default PaystackCustomButton;
