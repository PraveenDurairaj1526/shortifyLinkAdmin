import StatsCards from "./StatsCards";

export default function AdminBanner() {


  return (
    <div className="w-full space-y-6">
      <div className="w-full p-4 sm:p-6 !pb-[60px] bg-gradient-to-r from-[#0764df] to-[#b7c5d6] ">
        <h1 className="text-[28px] font-semibold text-white">
          Shortify Link
        </h1>
        <StatsCards/>
      </div>
    </div>
  );
}