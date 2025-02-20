import { fetchCategories, fetchProductsByCategory } from "./actions";
import CategorySelect from "@/components/navigation/category-select";
import { Products } from "@/components/products";
import { Suspense } from "react";

//todo make interface for searchParams
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  //const data = await fetchProducts();
  //get category key/value from searchParams, if none, default to electronics
  const { category = "electronics" } = await searchParams;

  const products = fetchProductsByCategory(category);
  const categories = fetchCategories();

  return (

    <main className="space-y-4">
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
         <h1 className="text-4xl font-bold text-white">🚀 Next.js <br></br> 🚀 Tailwind_CSS!</h1>
    
      <Suspense fallback={<div>Loading...</div>}>
        <CategorySelect categories={categories} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Products products={products} />
      </Suspense>

      </div>
    </main>
  );
}