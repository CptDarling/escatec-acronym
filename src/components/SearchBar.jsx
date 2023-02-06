export const SearchBar = ({filterText, onFilterTextChange}) => {
  return (
    <form type="search">
      <input
        type="text"
        placeholder="Search name or category..."
        defaultValue={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </form>
  )
}