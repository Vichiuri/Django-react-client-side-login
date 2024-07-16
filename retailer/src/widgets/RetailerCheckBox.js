import { Checkbox } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./widgets.css";

export default function RetailerCheckBox(props) {
  const { item, handleChange, index } = props;
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(item.selected);

    document.getElementById(`check_item_${index}`).checked = item.selected;
  }, [item]);

  return (
    <div className="check_item">
      <label class="container">
        {item.name}
        <input
          id={`check_item_${index}`}
          type="checkbox"
          value={selected}
          onChange={() => handleChange()}
        />
        <span class="checkmark"></span>
      </label>
    </div>
  );
}
