import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItem = useSelector((store) => store.bag);
  const element = bagItem.indexOf(item.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {element ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={handleRemove}
        >
          <FaMinus /> Remove from bag
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          <FaPlus /> Add to bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
