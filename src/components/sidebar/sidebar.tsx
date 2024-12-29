/* eslint-disable @typescript-eslint/no-empty-object-type */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({ className }: SidebarProps) {
  const categories = [
    "What's new",
    "Solo buckets",
    "Combo",
    "Boxes",
    "Burgers & sandwiches",
    "Combo buckets",
    "Juicy chicken",
    "Snacks",
    "Drinks",
  ];

  return (
    <aside className={cn("w-64 space-y-4", className)}>
      <nav className="flex flex-col space-y-1">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Menu</h2>
        </div>
        {categories.map((category) => (
          <Button key={category} variant="ghost" className="justify-start">
            {category}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
