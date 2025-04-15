import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  placeholder: string
  label: string
  required: boolean
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextareaWithLabel({ onChange, placeholder, label, required }: Props) {
  return (
    <div className="grid w-full gap-1.5 h-full mb-8">
      <Label htmlFor="message"><p className="pb-2">{label}</p>
        <Textarea required={required} onChange={onChange} className="resize-none h-full" placeholder={placeholder} id="message" />
      </Label>
    </div>
  )
}
