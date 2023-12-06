import  '../App.css';

function HeroSection() {
  return (
    <main className="hero">
      <div className="heroContent">
        <h1 style={{ fontSize:"108px", fontWeight:"1000", color:"black", lineHeight:"102px"}}>YOUR FEET DESERVE THE BEST</h1>
        <p style={{fontSize:"16px", fontWeight:"1000", color:"black"}}>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES
        </p>
     
      
      <div className="heroButtons">
        <button>Shop Now</button>
        <button className="secondaryButton">Category</button>
      </div>
      
      <div className="heroShopping">
        <p style={{fontSize:"14px"}}>Also available on </p>
      
        <div className="brandIcons">
       <img src="./public/flipkart.png" alt="Amazon"></img>
       <img src="./public/amazon.png" alt="Flipkart"></img>
        </div>
      </div>
    </div>
      

    <div className="heroImage">
    <img src="./public/shoe_image.png" alt="Nike shoe"></img>
</div>
</main>

  );
}
export default HeroSection;
