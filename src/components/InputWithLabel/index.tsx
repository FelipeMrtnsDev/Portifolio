import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  htmlFor: string;
  type: string;
  id: string;
  placeholder: string;
  required: boolean
};

export default function InputWithLabel({ label, onChange, htmlFor, type, id, placeholder, required }: Props) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input required={required} type={type} id={id} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
