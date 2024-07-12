import React, { useState } from 'react';
import './ExpandableTile.css';

const ExpandableTile = ({ header, formGroups, showAddButton }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [formGroupsData, setFormGroupsData] = useState(formGroups);

  const addFormGroup = () => {
    console.log(formGroupsData);
    // Create a new form group
    const formGroups = [...formGroupsData];
    // Add an empty form group
    formGroups.push({ name: '', label: '', type: 'text', value: '' });
    setFormGroupsData(formGroups);
  };

  return (
    <div className={`expandable-tile ${isExpanded ? 'expanded' : ''}`}>
      <div className="tile-header" onClick={toggleExpand}>
        <div>{header}</div>
        <button className="expand-button">
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {/* Expandable content */}
      {isExpanded && (
        <div className="tile-content">
          <form>
            {formGroups.map((group, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={group.name}>{group.label}:</label>
                {group.type === 'textarea' ? (
                  <textarea
                    id={group.name}
                    name={group.name}
                    defaultValue={group.value}
                    rows="4"
                  />
                ) : (
                  <input
                    type={group.type}
                    id={group.name}
                    name={group.name}
                    defaultValue={group.value}
                  />
                )}
              </div>
            ))}

            {/* Add button logic */}
          {  showAddButton &&          <div className="form-group">
              <button
                type="button"
                onClick={() => addFormGroup()}
              >
                Add
              </button>
            </div>}

            {/* Add form logic */}
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
          )}
    </div>
  );
};

export default ExpandableTile;