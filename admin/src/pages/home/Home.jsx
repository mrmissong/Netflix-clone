import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useMemo } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
		() => [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		[]
	);
  const [userStats, setUserStats] = useState([]);
	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await axios.get("/users/stats", {
					headers: {
						token:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDAzNDFmYmQ4MmNmODg0NDI2MjVmOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTg1ODIxMiwiZXhwIjoxNjc2Mzc2NjEyfQ.UcZfcu5uyLbnj8Pib618qVOikFzvFYQITLVt6lkXh8U",
					},
				});
        const statsList= res.data.sort((a,b)=>a._id-b._id)
				statsList.map((item) =>
					setUserStats((prev) => [
						...prev,
						{ name: MONTHS[item._id - 1], "New User": item.total },
					])
				);
			} catch (err) {
				console.log(err);
			}
		};
		getStats();
	}, [MONTHS]);
	console.log(userStats);
  return (
    <>
    <Sidebar/>
    <div className="home">
      <Topbar/>
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>  
    </div></>
    
  );
}