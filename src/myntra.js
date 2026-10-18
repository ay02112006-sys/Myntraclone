import {useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/cards";
import Header from "./components/header";
import Footer from "./components/footer";
import arr from "./utils/dummy";

function App(){
    let [A, setA] = useState(arr);
    function Sortbyprice(){
        arr.sort((a,b)=>{
            let priceA = parseInt(a.price.replace("₹","").trim());
            let priceB = parseInt(b.price.replace("₹","").trim());
            return priceA - priceB;

        });
        setA([...A]);
    }
    return(
        <>
        <header>
            <Header/>
        </header>
        <button className="sort-button" onClick={Sortbyprice}>Sort By Price</button>
         <div className="product-container" style={{display:"flex",gap:"20px", flexWrap:"wrap"}}>
            {A.map((item,index)=> <Card key={index} Cloth={item.Cloth} offer={item.offer} price={item.price}/>)}
        </div>
        <footer>
            <Footer/>
        </footer>
        </>
    )
}
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);
