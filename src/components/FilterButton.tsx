type Props = {
  name: string;
  handleFilter: () => void;
};

function FilterButton({ name, handleFilter }: Props) {
  return (
    <button
      className="bg-[#effafa] text-[#5ba4a4] font-bold px-2 py-1 rounded-sm"
      onClick={handleFilter}
    >
      {name}
    </button>
  );
}

export default FilterButton;
