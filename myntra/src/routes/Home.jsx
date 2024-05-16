import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((store) => store.item);
  return (
    <main>
      <div className="items-container">
        {items.map((currVal) => {
          return <HomeItem key={currVal.id} item={currVal} />;
        })}
      </div>
    </main>
  );
};
export default Home;
