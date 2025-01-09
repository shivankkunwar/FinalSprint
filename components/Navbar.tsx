import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { CodeXml, Menu } from "lucide-react"

export default function Component() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-neutral-900">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CodeXml className="h-6 w-6 text-gray-300" />
          <span className="flex text-xl font-semibold">
          <div className=" text-gray-300">Code</div>
          <div className="text-[#FE4A60]">Gray</div>
          </span>
          
        </Link>
        <nav className="hidden items-end gap-6 text-sm font-medium md:flex">
          <Link
            href="#"
            className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/problems"
            className="text-gray-300 hover:text-white dark:text-gray-400 dark:hover:text-gray-50"
            prefetch={false}
          >
            Problems
          </Link>
          
        </nav>
        <div className="flex items-center gap-4 md:hidden">
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden">
              <Menu  className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <SheetTitle>Menu</SheetTitle>
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Problems
                </Link>
            
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}





