import LineItems from "./LineItems";
const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
<ul>
    {items.map((item) => (
        <LineItems
            key = {item.id} /* key was removed in lineItems above */
            item = {item}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            />
        ))}
    </ul>
  )
}

export default ItemList;