import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextareaWithLabel({ onChange }: Props) {
  return (
    <div className="grid w-full gap-1.5 h-full mb-8">
      <Label htmlFor="message"><p className="pb-2">Sua mensagem</p>
        <Textarea onChange={onChange} className="resize-none h-full" placeholder="Escreva sua mensagem aqui..." id="message" />
      </Label>
    </div>
  )
}
