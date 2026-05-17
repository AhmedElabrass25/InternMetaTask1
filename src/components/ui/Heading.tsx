interface HeadingProps {
  title: string;
}
const Heading = ({ title }: HeadingProps) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>
    </>
  );
};

export default Heading;
