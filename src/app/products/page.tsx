import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"
import { Clock } from "lucide-react"

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-muted px-10 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Discover our range of premium business products designed to enhance your operations.
            </p>
          </div>
        </div>
      </section>

      {/* Products Coming Soon */}
      <section className="px-10 py-32">
        <div className="container">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-8 p-4 rounded-full bg-primary/10">
              <Clock className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Products Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're working on developing innovative products to help your business thrive. Stay tuned for our upcoming
              releases that will revolutionize how you operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Notified</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="px-10 py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's a sneak peek at some of the products we're developing.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Business Analytics Platform",
                description:
                  "A comprehensive analytics platform to help you gain valuable insights from your data and make informed business decisions.",
              },
              {
                title: "Project Management Suite",
                description:
                  "An all-in-one project management solution to streamline your workflows, improve collaboration, and increase productivity.",
              },
              {
                title: "Financial Planning Tool",
                description:
                  "A powerful financial planning tool to help you optimize your resources, forecast future performance, and maximize profitability.",
              },
            ].map((product, index) => (
              <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=300&width=500`}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-bold px-4 py-2 border-2 border-white rounded-full">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}

