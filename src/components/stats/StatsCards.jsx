import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinkFromFirebase } from "../../slice/shortLinkSlice";
import { getDataByDays } from "./getDateBasedData";
import { ClickCountIcon, LinkIcon } from "../../assets/SvgIcons";


export default function StatsCards() {
    const { shortLinks, loading } = useSelector((state) => state?.shortLinks)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLinkFromFirebase());
    }, [dispatch]);

    const totalClick = shortLinks.reduce(
        (acc, val) => acc + (val?.clickCount || 0),
        0
    );

    const shortLinkData = [
        {
            title: 'Link Creation Overview',
            icon: LinkIcon,
            iconColor: '#4141f4',
            iconBgColor: '#dbedff',
            Last24HoursData: getDataByDays(shortLinks, 1),
            Last24HoursLabel: 'Last 24 hrs',
            pastData: [
                {
                    label: 'Last 7 days',
                    data: getDataByDays(shortLinks, 7)
                },
                {
                    label: 'Last 30 days',
                    data: getDataByDays(shortLinks, 30)
                },
            ]
        },
        {
            title: 'Click Count',
            icon: ClickCountIcon,
            iconColor: '#1cad1c',
            iconBgColor: '#e1ffe1',
            Last24HoursData: getDataByDays(shortLinks, 1, true),
            Last24HoursLabel: 'Last 24 hrs',
            pastData: [
                {
                    label: 'Last 7 days',
                    data: getDataByDays(shortLinks, 7, true)
                },
                {
                    label: 'Last 30 days',
                    data: getDataByDays(shortLinks, 30, true)
                },
            ]
        }
    ]
    const TotalData = [
        {
            label: 'Total Short Links',
            data: shortLinks?.length
        },
        {
            label: 'Total Click Counts',
            data: totalClick
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" >
            {shortLinkData?.map((item,index) => {
                const Icon = item?.icon
                return (
                    <div className="p-5 rounded-xl border border-gray-200 bg-white" key={index}>
                        <div className="flex justify-between gap-3 items-center mb-1.5">
                            <p className="text-md text-gray-700 font-semibold">{item?.title}</p>
                            <div className="w-10 h-10 bg-[] rounded-md flex justify-center items-center p-2" style={{ backgroundColor: item?.iconBgColor, color: item?.iconColor }}><Icon className={'w-full h-full'} /></div>
                        </div>
                        <div className="pb-5 border-b border-b-gray-200 mb-5">
                            <p className="text-sm text-gray-700 mb-1">{item?.Last24HoursLabel}</p>
                            {loading ? <div className="h-9 w-20 bg-gray-300 rounded animate-pulse mt-2"></div> : <p className="text-3xl font-semibold">{item?.Last24HoursData}</p>}
                        </div>
                        <div className="grid gap-4">
                            {item?.pastData?.map((list,key) => {
                                return (
                                    <div className="grid grid-cols-2 gap-4" key={key}>
                                        <div className="text-xs text-gray-700">{list?.label}</div>
                                        {loading ? <div className="flex justify-end"><div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div></div> : <div className="text-xs text-end font-medium">{list?.data}</div>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })
            }
            <div className="p-5 rounded-xl border border-gray-200 bg-white">
                <p className="text-md text-gray-700 font-semibold mb-4">Platform Overview</p>
                <div className="grid gap-5">
                    {TotalData?.map((item,innerKey) => {
                        return (
                            <div key={innerKey}>
                                <p className="text-sm text-gray-700 mb-1">{item?.label}</p>
                                {loading ? <div className="h-9 w-20 bg-gray-300 rounded animate-pulse"></div> : <p className="text-3xl font-semibold">{item?.data}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
