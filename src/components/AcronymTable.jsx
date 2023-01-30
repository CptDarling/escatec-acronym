import { AcronymRow } from "./AcronymRow";
import { AcronymCategoryRow } from "./AcronymCategoryRow";

export const AcronymTable = ({ acronyms }) => {
  const rows = [];
  let lastCategory = null;

  acronyms.forEach((e) => {

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
        key={e.name}
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