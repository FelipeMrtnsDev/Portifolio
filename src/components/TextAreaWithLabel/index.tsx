import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5 h-full mb-8">
      <Label htmlFor="message"><p className="pb-2">Sua mensagem</p>
        <Textarea className="resize-none h-full" placeholder="Escreva sua mensagem aqui..." id="message" />
      </Label>
    </div>
  )
}
