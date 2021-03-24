import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {
  FormControlLabel,
  MenuList,
  MenuItem,
  Typography,
  Collapse,
} from '@material-ui/core';
import { Toggle, CategoryToggle, FilterBody } from '@mono-nx-test-with-nextjs/ui';
import {
  MenuData,
  CollapsedIdsObj,
} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';
import CheckboxIcon from './checkboxIcon';
import SeeMore from './seeMore';
import { updateFiltersAction } from 'apps/fe-wtc-tech-test/store/filter/filter.action';

const useStyles = makeStyles((theme) =>
  createStyles({
    filterItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    menuItem: {
      padding: '0 0 0 25px',
    },
    menuLabel: {
      padding: '0 20px 4px',
    },
    menuList: {
      padding: '0 0 2px',
    },
    category: {
      fontWeight: 'bold',
    },
    categoryDesktop: {
      '@media (max-width: 768px)': {
        display: 'none',
      }
    }
  })
);

export const FilterItem = ({
  data = [],
  checkedList = {},
  onChange = null,
}: {
  data: MenuData[];
  checkedList: CollapsedIdsObj;
  onChange: (newState: boolean, id: string) => void;
}) => {
  const [collapsedIds, setCollapsedId] = useState<CollapsedIdsObj>({});
  const [radioState, setRadioState] = useState({});
  const [mobileFilters, setMobileFilters] = useState()
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSeeMoreToggle = (newState, id) => {
    setCollapsedId({ ...collapsedIds, [id]: newState });
  };

  const handleOnChange = e => {
    const [clickedCategory, clickedValue] = e.target.name.split('--')
    const value = clickedValue === 'Yes' ? 'True' : 'False'
    setRadioState({
      ...radioState,
      [clickedCategory]: clickedValue
    })
    if (clickedCategory !== 'Watched') return dispatch(updateFiltersAction({ ['Saved']: value }))
    return dispatch(updateFiltersAction({ [clickedCategory]: value }))
  };
  const menuItems = Array.isArray(data) ? data : [data];
  const handleMobileFilters = (e) => {
    setMobileFilters(e.target.name)
    if (mobileFilters === e.target.name) {
      setMobileFilters(null)
    }
  };

  return (
    <>
      {menuItems.map(({ category, items, collapseItems }) => (
        <div key={category}>
          <CategoryToggle name={category} onClick={handleMobileFilters}>
            <Typography
              variant="body1"
              component="h6"
              className={`${classes.menuLabel} ${classes.category}`}
            >
              {category}
            </Typography>
          </CategoryToggle>
          <Typography
            variant="body1"
            component="h6"
            className={`${classes.menuLabel} ${classes.category} ${classes.categoryDesktop}`}
          >
            {category}
          </Typography>
          <FilterBody mobile={mobileFilters === category}>
            <Collapse in={collapsedIds[category]} collapsedHeight={75}>
              <MenuList className={classes.menuList}>
                {!['Yes', 'No'].includes(items[0].label) &&
                  items.map(({ label, count }) => {
                    return (
                      <MenuItem
                        className={classes.menuItem}
                        key={`${category}${label}`}
                      >
                        <FormControlLabel
                          control={
                            <Toggle
                              onChange={onChange}
                              id={label}
                              reset={Object.keys(checkedList).length === 0}
                            >
                              <CheckboxIcon
                                checked={checkedList[label] || false}
                              />
                            </Toggle>
                          }
                          label={label}
                        />
                          ({count})
                      </MenuItem>
                    );
                  })}
                {['Yes', 'No'].includes(items[0].label) && (
                  <RadioGroup name={category} value={radioState[category]} onChange={handleOnChange}>
                    {items.map(({ label, count }) => {
                      return (
                        <MenuItem
                          className={classes.menuItem}
                          key={`${category}${label}`}
                        >
                          <FormControlLabel
                            control={<Radio />}
                            label={label}
                            id={`${category}--${label}`}
                            value={label}
                            name={`${category}--${label}`}
                          />
                            ({count})
                        </MenuItem>
                      );
                    })}
                  </RadioGroup>
                )}
              </MenuList>
            </Collapse>
          </FilterBody>
          <Toggle onChange={handleSeeMoreToggle} id={category}>
            {collapseItems && <SeeMore open={collapsedIds[category]} />}
          </Toggle>
        </div>
      ))}
    </>
  );
};

export default FilterItem;
