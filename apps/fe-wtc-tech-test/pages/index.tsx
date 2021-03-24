import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterMenu} from '@mono-nx-test-with-nextjs/fe-wtc-tech-test';
import { MainGrid, Paper, StarBar, Title, Grid, Image, CardHeader, ArrowDown} from '@mono-nx-test-with-nextjs/ui';
import { fetchMovieListAction, removeMovieFromListAction, setMovieSaved } from '../store/movies/movie.action'
import { fetchFilterDataAction, toggleFilterAction, updateFiltersAction } from '../store/filter/filter.action'


const Home = () => {
  const [loading, movieList, filterData, filters, toggle] = useSelector(({ movie, filter }) => ([
    movie.loading,
    movie.movieList,
    filter.filterData,
    filter.filters,
    filter.toggle,
  ]))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieListAction())
    dispatch(fetchFilterDataAction())
  },
    []
  )

  const handleClick = (type: string, imdbID) => {
    dispatch(setMovieSaved(type, imdbID))
  }

  const getMenuData = data => {
    const oData: any = Object.keys(data).map((o: any) => {
      if (Array.isArray(data[o].filters)) {
        return data[o].filters.map(x => ({
          category: x.label,
          items: x.values.map(({ label, count }) => ({ label, count })),
          collapseItems: x.values.length > 2,
        })).
      } else {
        return Object.keys(data[o].filters).map(key => ({
          category: data[o].filters[key]?.label,
          items: data[o].filters[key]?.values.map(({ label, count }) => ({ label, count })),
          collapseItems: data[o].filters[key]?.values.length > 2
        }))
      }
    })
    return oData.flatMap(x => x)
  }

  const moviesLength = movieList?.length - 1

  const handleOnChange = (ceva) => {
    dispatch(updateFiltersAction(ceva))
  }

  const getFilterMovieList = (movieList) => {
    const radioFilter = Object.keys(filters).filter(f => filters[f] !== false)

    return radioFilter.length ? movieList.filter(movie => {
      return (radioFilter.filter(f => {
        if(typeof filters[f] === "string" && movie.hasOwnProperty(f) && movie[f] === filters[f]) {
          return true
        } else {
          return Object.values(movie).includes(f)
        }
      }).length)
    }) : movieList
  }

  const imgLoad = e => {
    // console.log(Object.keys(e), e.type)
  }
  const imgError = e => {
    dispatch(removeMovieFromListAction(e.target.src))
  }

  const handleFilterToggle = () => {
    dispatch(toggleFilterAction(!toggle))
    console.log(toggle)
  }

  return (
    <MainGrid>
      <ArrowDown onClick={handleFilterToggle}/>
      <Title>Movies ({moviesLength})</Title>
      {filterData && <FilterMenu data={getMenuData(filterData)} onChange={handleOnChange} />}
      <Grid toggle={toggle}>
        {getFilterMovieList(movieList).map(({ Poster, imdbRating, Saved, Watched, imdbID }, key) => {
          return (
            <Paper elevation={6} key={key} theme={`${Saved}_${Watched}`}>
              <CardHeader handleClick={handleClick} watched={Watched} saved={Saved} imdbID={imdbID} />
              <Image onError={imgError} onLoad={imgLoad} imagePath={Poster} />
              <div style={{ fontWeight: 'bold' }}>({imdbRating})</div>
              <StarBar imdbRating={imdbRating} />
            </Paper>
          )
        })}
      </Grid>
    </MainGrid>
  );
};

export default Home;
