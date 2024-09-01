import React, { ChangeEvent, FC, SyntheticEvent } from "react";

interface Props {
  search: string | undefined;
  onClick: (e: SyntheticEvent) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<Props> = ({
  search,
  onClick,
  handleChange,
}: Props): JSX.Element => {
  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)} />
      <button onClick={(e) => onClick(e)}>Save</button>
    </div>
  );
};

export default Search;
