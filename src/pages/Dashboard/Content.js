import CreateCard from "../../components/CreateCard";
import MovieCards from "../../components/MovieCardSet";
import MovieCard from "../../components/MovieCard";

const Content = () => {
  return (
    <div className="flex justify-between mt-6 px-12">
      <div className="w-[24%] h-[calc(100vh-184px)] bg-white rounded-[20px]">
        <CreateCard />
        <MovieCard />
        <MovieCard />
      </div>
      <MovieCards />
      <MovieCards />
      <MovieCards />
    </div>
  );
};

export default Content;
