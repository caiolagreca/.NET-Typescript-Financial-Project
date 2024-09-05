import React, { useEffect, useState } from "react";
import { CompanyCashFlow } from "../../company";
import { getCashFlowStatement } from "../../api";
import { useOutletContext } from "react-router";
import Table from "../Table/Table";
import Spinners from "../Spinners/Spinners";
import { formatLargeMonetaryNumber } from "../Helpers/NumberFormatting";

type Props = {};

const configs = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
  },
];

const CashFlow = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashFlow, setCashFlow] = useState<CompanyCashFlow[]>();

  useEffect(() => {
    const getCashFlow = async () => {
      const result = await getCashFlowStatement(ticker!);
      setCashFlow(result?.data);
    };
    getCashFlow();
  }, []);
  return (
    <>
      {cashFlow ? (
        <>
          <Table config={configs} data={cashFlow} />
        </>
      ) : (
        <Spinners />
      )}
    </>
  );
};

export default CashFlow;
