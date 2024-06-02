import { Cart } from "../Cart";
import { useContext } from "react";
import { getProductData } from "../Products";

function CartProduct(props) {
  const cart = useContext(Cart);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div>
      <h5 className="" style={{color: "purple"}}>
        {productData.name}
      </h5>
      <h6>
        Cantidad: {quantity}
      </h6>
      <p>
      {(quantity * productData.price).toFixed(2).toString().replace(".", ",").replace(/\,00/,'')}€
      </p>
      <button className="btn btn-danger" onClick={() => cart.deleteItem(id)}>
        Remover del carrito
      </button>
      <hr />
    </div>
  );
}

export default CartProduct
