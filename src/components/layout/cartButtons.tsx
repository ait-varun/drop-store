import React from "react";
import { Button } from "../ui/button";

interface CartButtonsProps {
  updateQuantity: (id: number, quantity: number) => void;
  item: {
    id: number;
    quantity: number;
  };
  removeFromCart: (id: number) => void;
}

export default function CartButtons({
  updateQuantity,
  item,
  removeFromCart,
}: CartButtonsProps) {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Button
          size="icon"
          variant="outline"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}>
          -
        </Button>
        <span>{item.quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}>
          +
        </Button>
        <Button
          size="icon"
          variant="destructive"
          onClick={() => removeFromCart(item.id)}>
          ×
        </Button>
      </div>
    </>
  );
}
