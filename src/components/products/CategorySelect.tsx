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
    label: cat.charAt(0).toUpperCase() + cat.slice(1),
  }));

  return (
    <Select
      options={options}
      value={options.find((option) => option.value === category)}
      onChange={(op) => setCategory(op?.value || "all")}
      placeholder="Select category..."
      classNames={{
        control: () => "!h-14 !rounded-2xl !border-gray-200 !shadow-none !px-2",
        placeholder: () => "!text-gray-400 !font-medium",
        singleValue: () => "!text-gray-800 !font-medium",
        option: ({ isSelected, isFocused }) =>
          `!cursor-pointer !py-3 !px-4 ${
            isSelected
              ? "!bg-brand-primary !text-white"
              : isFocused
              ? "!bg-brand-primary/10 !text-brand-primary"
              : "!text-gray-700 hover:!bg-gray-50"
          }`,
        menu: () => "!rounded-2xl !overflow-hidden !border-none !shadow-premium !mt-2",
      }}
      styles={{
        control: (base, state) => ({
          ...base,
          borderColor: state.isFocused ? "#6366f1" : "#e5e7eb",
          "&:hover": {
            borderColor: "#6366f1",
          },
        }),
      }}
    />
  );
};

export default CategorySelect;
