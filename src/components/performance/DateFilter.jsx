import { ArrowUpDownIcon } from "../../assets/SvgIcons";

const DateFilter = ({ days, setDays }) => {

    return (
        <div class="relative">
            <select
                value={days}
                onChange={(e) => setDays(e.target.value)}
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-400 focus:shadow-md appearance-none cursor-pointer"
            >
                <option value={7}>Last 7 Days</option>
                <option value={30}>Last 30 Days</option>
                <option value={90}>Last 3 Months</option>
            </select>
            <ArrowUpDownIcon className={'h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700'} />
        </div>
    );
};

export default DateFilter;
