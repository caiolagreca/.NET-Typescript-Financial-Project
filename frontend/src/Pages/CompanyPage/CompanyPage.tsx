import React, { useEffect, useState } from "react";
import { getCompanyProfile } from "../../api";
import { CompanyProfile } from "../../company";
import { useParams } from "react-router";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinners from "../../Components/Spinners/Spinners";

interface Props {}

const CompanyPage = (props: Props) => {
  const { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfile = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfile();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subtitle={company.companyName} />
            <Tile
              title="Price"
              subtitle={"$" + company.price.toString()}
            />{" "}
            <Tile title="Sector" subtitle={company.sector} />
            <Tile title="DCF" subtitle={"$" + company.dcf.toString()} />{" "}
            <p className="bh-white p-6 shadow rounded text-medium text-gray">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinners />
      )}
    </>
  );
};

export default CompanyPage;
