import "./movieList.css";
import { DataGrid , GridColDef } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
// import { DataGrid,} from "@mui/data-grid";

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect} from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "year", width: 120 },
    { field: "limit", headerName: "limit", width: 120 },
    { field: "isSeries", headerName: "isSeries", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/movie/" + params.row._id, movie: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlinedIcon
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  // const rows = movies.map(movie=>{
  //   return [{ id: movie._id, title:movie.title, year:movie.year, des:movie.desc }]
  // })
 
  return (
    <div className="productList" >
       <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
      </Box>
      
    </div>
  );
  
}