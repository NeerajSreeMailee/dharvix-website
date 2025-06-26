import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  testimonial: string
  rating: number
  imageUrl: string
}

export function TestimonialCard({ name, role, company, testimonial, rating, imageUrl }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted"}`} />
          ))}
        </div>
        <p className="text-muted-foreground mb-6">"{testimonial}"</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}

