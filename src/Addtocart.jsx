import React from 'react';
import "./Addtocart.css"

function Addtocart() {
  return (
    <div>
      <div className="container">

  <h1 className='text-center'>Shopping Cart</h1>
  <table>
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>Product 1</td>
      <td>
        <form>
          <input type="number" name="quantity" value="1" min="1"/>
          <button type="submit">Update</button>
        </form>
      </td>
      <td>$10.00</td>
      <td>$10.00</td>
      <td>
        <form>
          <button type="submit">Remove</button>
        </form>
      </td>
    </tr>
    <tr>
      <td>Product 2</td>
      <td>
        <form>
          <input type="number" name="quantity" value="1" min="1"/>
          <button type="submit">Update</button>
        </form>
      </td>
      <td>$20.00</td>
      <td>$20.00</td>
      <td>
        <form>
          <button type="submit">Remove</button>
        </form>
      </td>
    </tr>
    <tr>
      <td colspan="3"></td>
      <td>$30.00</td>
    </tr>
  </table>
  <form>
    <button type="submit">Checkout</button>
  </form>
  <form>
    <button type="submit">Continue Shopping</button>
  </form>
    </div>

    </div>
  )
}

export default Addtocart