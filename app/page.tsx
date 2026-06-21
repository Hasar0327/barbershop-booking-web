import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
export default function Home() {
  return (
   <main className="min-h-screen flex items-center justify-center">
     <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>huts gesiin bii </DrawerTitle>
      <DrawerDescription className="flex justify-center">
        <Image src="/images/fu.png" alt="Description" width={400} height={300} />
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </main>
  );
}