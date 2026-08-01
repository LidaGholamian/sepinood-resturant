import { Input } from "@base-ui/react";
import { Button } from "../shared/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items center justify-center h-screen container mx-auto">
      <Button className='w-24'>Click me</Button>
      <Input placeholder="enter your name" className='w-1/2'/>
    </div>
  );
}
