import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ minSeating, maxSeating, updateFilter}) => (
  <div>
    <span className="filter">Filter results:</span>
    <br/>
    <label>minimum seats</label>
    <input type="number" value={minSeating} onChange={handleChange('minSeating', updateFilter)} />
    <br/>
    <label>maxmum seats</label>
    <input type="number" value={maxSeating} onChange={handleChange('maxSeating', updateFilter)} />
  </div>
);

export default FilterForm;
