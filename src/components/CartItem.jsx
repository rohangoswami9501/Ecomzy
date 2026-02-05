
// import { RiDeleteBin2Line } from "react-icons/ri";
// import { useDispatch } from "react-redux";
// import { remove } from "../redux/Slices/CartSlice";
// import { toast } from "react-hot-toast";

// const CartItem = ({item, itemIndex}) => {

//   const dispatch = useDispatch();

//   const removeFromCart = () =>{
//     dispatch(remove(item.id));
//     toast.success("Item removed sucessfully");
//   }
   
//   return(
//     <div>
        
//         <div>

//             <div>
//                 <img src={item.image} />
//             </div>

//             <div>
//               <h1>{item.title}</h1>
//               <h2>{item.description}</h2>

//               <div>
//                 <p>${item.price}</p>
//               <div
//               onClick={removeFromCart}>
//                 <RiDeleteBin2Line />
//               </div>
//             </div>
//             </div>
            
//         </div>
//     </div>
//   )  

// };

// export default CartItem;

import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed successfully");
  };

  return (
    <div className="border-b border-gray-300 pb-6 mb-6 flex flex-col sm:flex-row justify-between items-center">
      {/* Left Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full sm:w-auto">
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-36 h-36 object-contain"
        />

        {/* Text Content */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {item.title}
          </h2>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">
            {item.description}
          </p>
          <p className="text-green-600 font-bold">${item.price}</p>
        </div>
      </div>

      {/* Delete Icon */}
      <button
        onClick={removeFromCart}
        className="bg-red-100 hover:bg-red-200 text-red-500 p-3 rounded-full mt-4 sm:mt-0 transition"
      >
        <RiDeleteBin2Line size={20} />
      </button>
    </div>
  );
};

export default CartItem;


