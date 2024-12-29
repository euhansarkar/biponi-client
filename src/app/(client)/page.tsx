import FreeDeliveryBanner from "@/components/banner/free-delivery-banner";
import ShopBanner from "@/components/banner/shop-banner";
import ProductGrid from "@/components/product/product-grid";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-2">
            <ShopBanner />
            <FreeDeliveryBanner />{" "}
    </div>
          
      <h1 className="mb-6 text-2xl font-bold">Solo Buckets</h1>
      <ProductGrid />
    </div>
  );
}
