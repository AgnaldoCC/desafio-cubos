import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { useMoviesStore } from "../../../store/movies.store";
import { Movies } from "../../../types/commonTypes";

type PaginationProps = {
  movies: Movies;
};

type PageData = {
  selected: number;
}

const Pagination = (props: PaginationProps) => {
  const setPage = useMoviesStore((state) => state.setPage);
  if(!props.movies) return null;
  const handlePageChange = (data: PageData) => {
    window.scrollTo(0,0);
    setPage(data.selected + 1);
  }
  return (
    <MyPaginate         
    breakLabel="..."
    nextLabel=">"
    pageRangeDisplayed={4}
    pageCount={props.movies?.total_pages}
    marginPagesDisplayed={0}
    previousLabel="<"
    onPageChange={handlePageChange}
    />
  )
};

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  height: auto;
  padding: 0px;
  margin: 0 auto;
  
  @media screen and (min-width: 1024px) {
    padding: 0 5rem;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    margin: 0 5px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #2c2c2c;
    border-color: transparent;
    color: white;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export default Pagination;