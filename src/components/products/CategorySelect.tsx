import Select from "react-select";

interface CategorySelectProps {
  categories: string[];
  category: string;
  setCategory: (val: string) => void;
}
const CategorySelect = ({
  categories,
  category,
  setCategory,
}: CategorySelectProps) => {
  const options = categories.map((cat) => ({
    value: cat,
    label: cat,
  }));
  return (
    <>
      <Select
        className="py-3"
        options={options}
        value={options.find((option) => option.value === category)}
        onChange={(op) => setCategory(op?.value || "all")}
        placeholder="Select category..."
        styles={{
          control: (base, state) => ({
            ...base,
            height: "52px",
            minHeight: "52px",
            borderRadius: "2px",
            borderColor: state.isFocused ? "#3b82f6" : "#d1d5db",
            boxShadow: "none",
            paddingLeft: "4px",

            "&:hover": {
              borderColor: "#3b82f6",
            },
          }),
        }}
      />
    </>
  );
};

export default CategorySelect;
