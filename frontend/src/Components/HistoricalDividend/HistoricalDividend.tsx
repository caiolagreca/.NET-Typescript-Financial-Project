import React, { useEffect, useState } from "react";
import { CompanyHistoricalDividend, Dividend } from "../../company";
import { getHistoricalDividend } from "../../api";
import { useOutletContext } from "react-router";
import SimpleLineChart from "../SimpleLineChart/SimpleLineChart";

type Props = {};

const HistoricalDividend = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [dividend, setDividend] = useState<Dividend[]>();
  useState<boolean>(false);

  useEffect(() => {
    const getDividend = async () => {
      const result = await getHistoricalDividend(ticker);
      setDividend(
        result?.data.historical.slice(0, 18).sort((a, b) => {
          var c = new Date(a.date);
          var d = new Date(b.date);
          return c.getTime() - d.getTime();
        })
      );
    };
    getDividend();
  }, []);
  console.log("dividendo: ", dividend);

  return (
    <>
      {dividend ? (
        <>
          <SimpleLineChart data={dividend} xAxis="label" dataKey="dividend" />
        </>
      ) : (
        <h1 className="ml-3">Company does not have a dividend!</h1>
      )}
    </>
  );
};

export default HistoricalDividend;
