import React from 'react'
import styles from '../styles/products.module.scss'

 const Products = ({products}) => {
  return (
    <>
    {products.map((product, index) => (
        <div key={index} className='d-flex flex-column'>
          <div className='d-flex flex-row justify-content-between align-items-center my-2'>
           
            <h5>{product.productheading}</h5>
            
            
            {index < 2 && <span style={{display:'inline-block',textAlign:'center'}}>VIEW ALL</span>}
          </div>
          <div className={styles.product1}>
            {product.categoryimages.map((imgproduct, imgIndex) => (
              <img key={imgIndex} src={imgproduct} alt="product" />
            ))}
          </div>
        </div>
      ))}
      </>
  )
}

export default Products;
