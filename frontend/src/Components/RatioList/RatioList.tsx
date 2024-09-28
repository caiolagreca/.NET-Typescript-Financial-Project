type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedRows = config.map((row: any) => {
    return (
      <li className="py-4 border-b border-gray-700 last:border-none">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-200 truncate">
              {row.label}
            </p>
            <p className="text-sm text-gray-400 truncate">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-lightGreen">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6">
      <ul className="divide-y divide-gray-700">{renderedRows}</ul>
    </div>
  );
};

export default RatioList;
