import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, CircularProgress, Button } from "@material-ui/core";
import Styled from "styled-components";
import axios from "axios";

const MovieInfo = ({ movieID, setMovieDisplay }) => {

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [readMore, setReadMore] = useState(false);

  const handleClose = () => {
    setMovieDisplay(0);
  };

  const fetchMovies = async () => {
    setLoading(true);

    await axios.get("https://api.themoviedb.org/3/movie/" + movieID + "?api_key=" + process.env.REACT_APP_API_KEY + "&language=en-US")
      .then(async (res) => {
        setTimeout(() => {
          setMovie(res.data);
          setLoading(false);
        }, 250);
      })
      .catch(err => {
        alert("Could not get the movie data");
        console.log(err);
      });
  };

  // Use useEffect to get a certain movies data
  useEffect(() => {
    fetchMovies();
  }, [movieID])

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      open={movie !== {}}
      onClose={handleClose}
    >
      {loading ? (
        <MovieTitleContainer>
          <LoadingIndicator />
        </MovieTitleContainer>
      ) : (
        <>
          <MovieTitleContainer>
            <MovieTitle>
              {movie.title}
            </MovieTitle>
          </MovieTitleContainer>
          <DialogContent>
            <MovieDetailType>
              Overview:
              <MovieDetail>
                {!readMore ? `${movie.overview.substring(0, 150)}...` : movie.overview}
                <ReadMoreBtn variant="text" onClick={() => { setReadMore(!readMore) }}>
                  {readMore ? `${"Show less"}` : `${"Read more"}`}
                </ReadMoreBtn>
              </MovieDetail>
            </MovieDetailType>
            <MovieDetailType>
              Genre:
              <MovieDetail>
                {movie.genres.map(genre => " " + genre.name).toString()}
              </MovieDetail>
            </MovieDetailType>
            <MovieDetailType>
              Runtime:
              <MovieDetail>
                {movie.runtime + " min"}
              </MovieDetail>
            </MovieDetailType>
            <MovieDetailType>
              Rating:
              <MovieDetail>
                {movie.vote_average + "/10"}
              </MovieDetail>
            </MovieDetailType>
            <MovieDetailType>
              Release:
              <MovieDetail>
                {movie.release_date}
              </MovieDetail>
            </MovieDetailType>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

const ReadMoreBtn = Styled(Button)`
  font-weight: 600;
  color: #5377d4;
  padding: 0;
  margin-left: 10px;
`;

const LoadingIndicator = Styled(CircularProgress)`
  justify-content: center;
`;

const MovieTitleContainer = Styled(DialogTitle)`
  display: flex;
  justify-content: center;
`;

const MovieTitle = Styled(Typography)`
  font-size: larger;
  font-weight: 600;
`;

const MovieDetailType = Styled.h3`
  display: flex;
  // background-color: orange;
`;

const MovieDetail = Styled(Typography)`
  margin-left: 5px;
`;

export default MovieInfo;