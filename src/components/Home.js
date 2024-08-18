import React from "react";

//component
function Home(props){
  console.log('Home Component Props',props)
  return(
    <div>
      <div className="add-to-cart">
        <img  style={{width:'100px',position:'absolute',right:30}} src="https://images.unsplash.com/photo-1609980705251-8d7d6266036d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fHww" alt="cart" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <img style={{width:'100px'}} src='https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D' alt="Mobile"/>
      </div>
      <div className="text-wrapper item">
        <span>One Mobile </span>
        <span>price:$1000.00</span>
      </div>
      <div className="button-wrapper item">
        <button onClick={()=>props.addToCartHandler({price:1000,name:'iphone'})}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Home