import { useState } from "react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"

export function ChatDisclaimer() {
    const [open, setOpen] = useState(false)

    return (
        <Collapsible open={open} onOpenChange={setOpen} className="mb-3">

            <CollapsibleContent className="mb-1">
                <div className="text-sm p-3 border rounded-lg bg-muted/40">
                    This chat is for informational purposes only. Do not share sensitive or
                    confidential information here.
                </div>
            </CollapsibleContent>
            <div className="flex items-center justify-between bg-muted px-3 rounded-lg">
                <p className="text-sm font-medium">Disclaimer</p>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-1">
                        {open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </Button>
                </CollapsibleTrigger>
            </div>

        </Collapsible>
    )
}
