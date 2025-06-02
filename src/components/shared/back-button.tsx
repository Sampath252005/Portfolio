
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => router.back()}
      className={cn("self-start", className)} // Added self-start for flex contexts
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back
    </Button>
  );
}

// Helper cn function if not globally available in this specific file context
// (though usually it is via @/lib/utils)
// If you have a global cn, this local one can be removed.
function cn(...inputs: any[]) {
  // A basic version of cn for this component, replace with your actual cn if needed
  return inputs.filter(Boolean).join(' ');
}
