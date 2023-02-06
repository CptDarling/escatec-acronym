import { useState } from "react"
import { AcronymTable } from "./AcronymTable";
import { SearchBar } from "./SearchBar"

export const FilterableAcronymTable = ({ acronyms }) => {
  const [filterText, setfilterText] = useState('');

  return (
    <div>
      <SearchBar
        filterText={filterText}
        onFilterTextChange={setfilterText}
      />
      <AcronymTable
        acronyms={acronyms}
        filterText={filterText}
      />
    </div>
  )
}