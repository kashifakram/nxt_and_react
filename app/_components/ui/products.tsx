import { useState } from "react";

type RequestState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: any }
  | { status: "error"; error: Error };

function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

const ProductRow = ({ product }) => {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      return;

    if (inStockOnly && !product.stocked) return;

    if (product.category !== lastCategory)
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );

    rows.push(<ProductRow product={product} key={product.name} />);

    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInputOnlyChange,
}) => (
  <form className="avatar">
    <input
      type="text"
      value={filterText}
      placeholder="...Search"
      onChange={(e) => {
        onFilterTextChange(e.target.value);
      }}
    />
    <br />
    <label htmlFor="inStockCB">
      <input
        type="checkbox"
        checked={inStockOnly}
        name="inStockCB"
        id="inStockCB"
        onChange={(e) => {
          onInputOnlyChange(e.target.checked);
        }}
      />{" "}
      Only show products in stock
    </label>
  </form>
);

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setinStockOnly] = useState<boolean>(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInputOnlyChange={setinStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
