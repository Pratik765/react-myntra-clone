import { useSelector } from "react-redux";
import Item from "./Item";
import BagMessage from "./BagMessage";
const BagItem = () => {
  const bagItem = useSelector((store) => store.bag);
  const item = useSelector((store) => store.item);
  const finalItems = item.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      {finalItems.length == 0 ? (
        <BagMessage />
      ) : (
        finalItems.map((item) => {
          return <Item item={item} />;
        })
      )}
    </>
  );
};
export default BagItem;
