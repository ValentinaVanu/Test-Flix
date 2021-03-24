import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';
import { Button, ToggleFilter } from '@mono-nx-test-with-nextjs/ui';
import { FilterItem } from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';
import { resetFilterAction, toggleFilterAction } from 'apps/fe-wtc-tech-test/store/filter/filter.action';

import * as FMS from './filterMenu.style'


export type MenuItem = {
  label: string;
  count: number;
}

export type MenuData = {
  category: string;
  items: MenuItem[];
  collapseItems: boolean;
};

export type CollapsedIdsObj = {
  [category: string]: boolean;
};

export const FilterMenu = ({
  data = [],
  onChange = null,
}: {
  data: MenuData[];
  onChange: (list: CollapsedIdsObj) => void;
}) => {
  const [checkedBoxesList, setCheckedBoxesListSetList] = useState<
    CollapsedIdsObj
  >({});

  const toggle = useSelector(({ filter }) => filter.toggle)

  const handleOnChange = (newCheckboxState, id) => {
    const newState = { ...checkedBoxesList, [id]: newCheckboxState };
    setCheckedBoxesListSetList(newState);
    onChange(newState);
  };
  const dispatch = useDispatch();
  const handleReset = () => {
    setCheckedBoxesListSetList({})
    dispatch(resetFilterAction())
  };

  const handleClose = () => {
    dispatch(toggleFilterAction(!toggle))
  }

  const classes = FMS.useStyles();
  return (
    <ToggleFilter toggle={toggle} className={classes.filterMenu}>
      <div className={classes.cardsContainer}>
        <Paper className={classes.paper}>
          <Button
            variant="contained"
            className={classes.resetFilters}
            onClick={handleReset}
          >
            Reset Filters
          </Button>
          <Button
            variant="contained"
            className={classes.closeFilters}
            onClick={handleClose}
          >
            Close Filters
          </Button>

          <FilterItem
            data={data}
            onChange={handleOnChange}
            checkedList={checkedBoxesList}
          />
        </Paper>
      </div>
    </ToggleFilter>
  );
};

export default FilterMenu;
