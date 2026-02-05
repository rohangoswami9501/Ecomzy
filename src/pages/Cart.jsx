// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import CartItem from "../components/CartItem";

// const Cart = () => {
  
//   const cart = useSelector((state) => state.cart ?? []);
//   const[totalAmount,setTotalAmount] = useState(0);

//   useEffect( () =>{
//     setTotalAmount(cart.reduce((acc,curr) => acc+curr.price,0));
//   },[cart])

//    return (
//     <div className="flex flex-col">
//       {
//         cart.length > 0 ?
//         (<div>

//           <div>
//           {
//             cart.map((item,index) =>{
//               return <CartItem key={item.id} item={item} itemIndex={index} />
//             })
//           }
//           </div>

//           <div>
//             <div>
//               <div>Your Cart</div>
//               <div>Summary</div>
//               <p>
//                 <span>Total Items:{cart.length}</span>
//               </p>
//             </div>  

//             <div>
//                 <p>Total Amount:${totalAmount}</p>
//                 <button>
//                   CheckOut Now
//                 </button>
//             </div>
//           </div>
//         </div>):
//         (
//           <div>
//           <h1>Cart is Empty</h1>
//           <Link to={"/"}>
//           <button>
//             Shop Now
//           </button>
//           </Link>
//           </div>
//         )
//       }
//     </div>
//    )
// };

// export default Cart

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart ?? []);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-white py-10 px-6 md:px-12">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-11">
          {/* Left Side - Items */}
          <div className="flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right Side - Summary */}
          <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-semibold text-green-700 mb-2">
              Your Cart
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">SUMMARY</h3>

            <p className="text-gray-700 mb-2">
              Total Items:{cart.length}
            </p>
            <p className="text-gray-700 mb-6">
              Total Amount:{" "}
              <span className="font-bold text-green-600">
                ${totalAmount.toFixed(2)}
              </span>
            </p>

            <button className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg font-semibold transition">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart
        <div className="flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Cart is Empty 🛒
          </h1>
          <Link to={"/"}>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;


