import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase.config";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinkFromFirebase } from "../slice/shortLinkSlice";

export default function StatsCards() {
    const { shortLinks, loading } = useSelector((state) => state?.shortLinks)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLinkFromFirebase());
    }, [dispatch]);

    // Convert Firestore timestamp → JS Date
    const toDate = (ts) => (ts?.toDate ? ts.toDate() : new Date(ts));

    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday as start

    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const todayCount = shortLinks.filter(item => {
        const created = toDate(item.createAt);
        return created >= startOfToday;
    }).length;

    const weekCount = shortLinks.filter(item => {
        const created = toDate(item.createAt);
        return created >= startOfWeek;
    }).length;

    const monthCount = shortLinks.filter(item => {
        const created = toDate(item.createAt);
        return created >= startOfMonth;
    }).length;
    console.log(shortLinks?.length, 'kk')

    const cards = [
        {
            title: "Today's Short Links",
            value: todayCount,
        },
        {
            title: "This Week's Short Links",
            value: weekCount,
        },
        {
            title: "This Month's Short Links",
            value: monthCount,
        },
        {
            title: "Total Links",
            value: shortLinks?.length,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            {cards.map((card, i) => (
                <div key={i} className="p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <p className="text-sm text-gray-500">{card.title}</p>
                    {loading ? <div className="h-8 w-20 bg-gray-300 rounded animate-pulse mt-2"></div> : <h2 className="text-2xl font-semibold text-gray-900 mt-2">{card.value}</h2>}
                </div>
            ))}
        </div>
    );
}
