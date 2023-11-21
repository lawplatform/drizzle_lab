import { Card, LineChart, Title } from "@tremor/react";

const chartdata = [
	{
		날짜: "4월",
		"방문수": 9,
	},
	{
		날짜: "5월",
		"방문수": 13,
	},
	{
		날짜: "6월",
		"방문수": 14,
	},
	{
		날짜: "7월",
		"방문수": 23,
	},
	{
		날짜: "8월",
		"방문수": 32,
	},
	//...
];

const valueFormatter = (number: number) => ` ${new Intl.NumberFormat("us").format(number).toString()}`;

const Ch_line = () => (
	<Card className="mx-auto max-w-5xl">
		<Title>방문객수 </Title>
		<LineChart
			className="mt-6"
			data={chartdata}
			index="날짜"
			categories={["방문수"]}
			colors={["emerald", "gray"]}
			valueFormatter={valueFormatter}
			yAxisWidth={40}
		/>
	</Card>
);

export default Ch_line;
