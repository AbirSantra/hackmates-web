import BrandLogo from "./BrandLogo";

const BrandLogoWithName = () => {
  return (
    <span className="flex flex-row items-center gap-2">
      <span className="h-6 w-6">
        <BrandLogo />
      </span>
      <p className="font-brand text-lg font-semibold">HackMates</p>
    </span>
  );
};
export default BrandLogoWithName;
