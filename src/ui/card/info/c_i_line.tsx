import { Card, LineChart, Title } from "@tremor/react";

const chartdata = [
	{
		월: 6,
		"상담수": 14,
	},
	{
		월: 7,
		"상담수": 25,
	},
	{
		월: 8,
		"상담수": 33,
	},
	{
		월: 9,
		"상담수": 45,
	},
	{
		월: 10,
		"상담수": 56,
	},
	//...
];

const valueFormatter = (number: number) => ` ${new Intl.NumberFormat("us").format(number).toString()}`;




export default function I_line() {
	return (
		<div className="mx-1  flex translate-y-4 transform flex-col items-center gap-3 px-8  pb-20  shadow-xl transition duration-300 ease-in-out hover:translate-y-0">
			<Card>
				<Title>올해의 방문자수 </Title>
				<LineChart
					className="mt-6"
					data={chartdata}
					index="year"
					categories={["상담수"]}
					colors={["emerald", "gray"]}
					valueFormatter={valueFormatter}
					yAxisWidth={40}
				/>
			</Card>
			);

		</div>


	)
}
