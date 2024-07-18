import ProductBox from "./components/ProductBox";
import Test from "./components/Test";
import useSWR from 'swr';

// const product =[
//     {'name': 'Messi', 'price':3000, 'imgUrl':'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'},
//     {'name': 'beer', 'price':3000, 'imgUrl':'https://www.clawhammersupply.com/cdn/shop/articles/how_to_make_beer_1024x1024.jpg?v=1682910375'},
//     {'name': 'Heineken', 'price':3000, 'imgUrl':'https://www.encopadebalon.com/7695-large_default/heineken-premium-lager-beer-bottle-24-x-330ml.jpg'}
// ];


function ProductList(){

    const fetcher = url => fetch(url).then(r=>r.json());
    const {data,error,isLoading} = useSWR('http://localhost:3000/products',fetcher);

    if(error) return <div>failed to fetch api</div>;

    if(isLoading) return <div>loading.....</div>

    const itemList = data.map((product)=>(
      <ProductBox
      name={product.pro_name}
      price={product.pro_price}
      imgUrl=""
      />
    ));

    return(
        <div>
            <h1>Product List</h1>
            {itemList}
            <Test/>
        </div>
    )
}

export default ProductList