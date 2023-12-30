import Navbar from '../components/navbar/Navbar';
import ProductList from '../components/products/ProductList';

export default function Home(){
    return(
        <>
        <Navbar/>
        <main className='bg-gray-100'>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <ProductList/>

          </div>
        </main>
        </>
    )
}