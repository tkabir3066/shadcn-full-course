import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container py-32 text-center">
        <Button variant="destructive">Click</Button>
        <div className="my-5 text-white">
          <Button variant="outline">Learn More...</Button>
        </div>
      </div>
    </>
  );
}
