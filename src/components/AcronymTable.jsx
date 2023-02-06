import { AcronymRow } from "./AcronymRow";
import { AcronymCategoryRow } from "./AcronymCategoryRow";

export const AcronymTable = ({ acronyms, filterText }) => {
  const rows = [];
  let lastCategory = null;

  acronyms.forEach((e) => {

    // Match for name
    if (filterText && e.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      // Match for category
      if (e.category.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ) {
        return;
      }
    }

    if (e.category !== lastCategory) {
      rows.push(
        <AcronymCategoryRow
          category={e.category}
          key={e.category}
        />
      );
    }

    rows.push(
      <AcronymRow
        acronym={e}
        key={rows.length}
      />
    )

    lastCategory = e.category;
    
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );

}