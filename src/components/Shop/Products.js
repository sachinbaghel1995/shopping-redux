import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS=[
  {
  id:'p1',
  price:6,
  title:'my firs job',
  description:'I hv worked hard'
},
{
  id:'p2',
  price:7,
  title:'my second job',
  description:'I hv worked harder'
},
{
  id:'p3',
  price:5,
  title:'my third job',
  description:'I hv worked harder than never before'
}
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product)=>(
          <ProductItem 
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.des}
           />
          

        ))}
       
      </ul>
    </section>
  );
};

export default Products;
