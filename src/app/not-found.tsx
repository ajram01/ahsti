import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-[600px] w-full text-center">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-gray-800 mb-4">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the page youre looking for. It may have been
          moved or deleted.
        </p>

        {/* Links */}
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link href="/" className="w-[140px]">
            <Button className="w-[140px]" size="lg">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
