import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  data: any;
  xAxis: string;
  dataKey: string;
};

const SimpleLineChart = ({ data, xAxis, dataKey }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart
        data={data}
        margin={{
          top: 50,
          right: 50,
          left: 20,
          bottom: 10,
        }}
      >
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke="#00C49F" // Alterando a cor da linha para verde claro
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey={xAxis} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
