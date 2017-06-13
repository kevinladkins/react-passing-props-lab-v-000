import React from 'react';



const FilteredFruitList = ({filter, fruit}) => {
  const list = !filter ? fruit : fruit.filter(i => i.fruit_type === filter);
  return (
      <ul className="fruit-list">
        {list.map((list, index) => <li key={index}>{list.char}</li>)}
      </ul>
    )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}


export default FilteredFruitList;
