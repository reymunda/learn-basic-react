import React from 'react';
import './Product.css';
import thumb from '../../plant.jpg'
import trolley from '../../trolley.svg'
class Product extends React.Component{
    constructor(){
        super()
        this.state = {
            order: 4
        }
    }
    plusHandler = () =>{
        this.setState({
            order: this.state.order + 1
        })
    }
    minusHandler = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            })
        }
    }
    render(){
       return (
           <>
              <div className="containerProduct">
                <div className="header">
                    <h1>ITSomnia</h1>
                    <p style={{position:"relative",top:"-55px",right:"-150px",color:"black",fontSize:"20px"}}>{this.state.order}</p>
                </div>    
                <img src={thumb} width="100%" height="200px"/>
                <div className="product-dsc">
                    <h2>Tanaman Hias Langka</h2>
                    <h1 style={{color:"red",marginTop:"-10px"}}>Rp{400000*this.state.order}</h1>
                    <div className="product-overview">
                        <p style={{textAlign:"justify"}}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius minima voluptas rem magni expedita deleniti, quam facere laboriosam eligendi omnis ipsa odit accusantium quis nobis facilis assumenda iste maxime nulla!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quam consequatur culpa ratione? Vero ad sunt iure illo accusamus, possimus voluptatum doloremque animi ratione praesentium facere deleniti vel necessitatibus sed?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vero! Omnis illo odit error iure! Hic, quo. Nihil ratione unde et libero voluptate fugiat animi, fuga consequuntur ducimus nam aperiam.
                        </p>
                    </div>
                </div>
                <div className="add-cart">
                    <button className="minus" onClick={this.minusHandler}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.plusHandler}>+</button>
                </div>    
              </div>
           </>
       ) 
    }
}

export default Product;