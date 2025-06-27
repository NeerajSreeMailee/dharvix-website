import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">
          Would you like to start a project with us?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Let's work together to bring your vision to life. Our team of experts
          is ready to help you achieve your business goals.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link target="_blank" href="https://wa.me/+919000633061">
            Chat with us
          </Link>
        </Button>
      </div>
    </section>
  );
}
