import Button from "../../components/DefaultButton";
import SearchBar from "../../components/SearchBar";

const TopBar = (props) => {
  
  const setKeyWord = props.setKeyWord;

  return (
    <div className="flex h-[40px] justify-between mt-6 px-12">
      <a href="/flows">
          <Button btnName="+ Create Flow" />
      </a>
      <div className="flex gap-6 items-center">
        <Button btnName="Filter by" />
        <Button btnName="Order by" />
        <SearchBar bg="bg-white" setKeyWord={setKeyWord} />
      </div>
    </div>
  );
};

export default TopBar;
