// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// // import { Loading } from '../components';

// class Details extends Component {
//   constructor() {
//     super();
//     this.fetchD = this.fetchD.bind(this);

//     this.state = {
//       // id: match.params.id,
//       // movies: [],
//       // loading: true,
//     };
//   }

//   componentDidMount() {
//     this.fetchD();
//   }

//   async fetchD() {
//     const { id } = this.state;
//     // const fetchMovies = await movieAPI.getMovie(id);
//     this.setState({
//       // movies: { ...fetchMovies },
//       // loading: false,
//     });
//   }

//   render() {
//     // const { movies, loading } = this.state;
//     const { title, id, subtitle, storyline, imagePath, rating, genre } = movies;
//     // if (loading) return <Loading />;

//     return (
//       <div data-testid="movie-details">
//         <p>{ `title: ${title}` }</p>
//         {console.log(`no return${id}${title}${subtitle}${storyline}`)}
//         <img alt="Movie Cover" src={ `../${imagePath}` } />
//         <p>{ `Subtitle: ${subtitle}` }</p>
//         <p>{ `Storyline: ${storyline}` }</p>
//         <p>{ `Genre: ${genre}` }</p>
//         <p>{ `Rating: ${rating}` }</p>
//       </div>
//     );
//   }
// }

// // MovieDetails.propTypes = {
// //   movie: PropTypes.shape({
// //     id: PropTypes.string.isRequired,
// //     title: PropTypes.string,
// //     subtitle: PropTypes.string,
// //     storyline: PropTypes.string,
// //     rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// //     imagePath: PropTypes.string,
// //   }).isRequired,
// // };

// MovieDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   }).isRequired,
// };

// export default Details;
