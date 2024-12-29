import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Sanders Bucket",
    price: "1,990₸",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Sanders Duet Bucket",
    price: "4,200₸",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Friends Box",
    price: "9,050₸",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="overflow-hidden rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">{product.price}</h3>
            <p className="text-sm text-gray-600">{product.name}</p>
            <Button className="mt-4 w-full" variant="outline">
              Add
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
