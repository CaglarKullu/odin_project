import React from 'react'

const FormGroup = (group, formIndex, groupIndex) => {
    const generateUniqueKey = () => {
        return 'key-' + Math.random().toString(36).substr(2, 9);
      };
  return (
    <div className="form-group" key={generateUniqueKey()}>
    <label htmlFor={`${group.name}-${formIndex}-${groupIndex}`}>{group.label}:</label>
    {group.type === 'textarea' ? (
      <textarea
        id={generateUniqueKey()}
        name={`${group.name}-${formIndex}-${groupIndex}`}
        defaultValue={group.value}
        rows="4"
      />
    ) : (
      <input
        type={group.type}
        id={generateUniqueKey()}
        name={`${group.name}-${formIndex}-${groupIndex}`}
        defaultValue={group.value}
      />
    )}
  </div>
  )
}

export default FormGroup