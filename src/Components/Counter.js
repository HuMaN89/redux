import { connect, useSelector, useDispatch } from "react-redux";
import { inc, rnd, dec } from "../actions";
import { Component } from "react";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary">
        DEC
      </button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        INC
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-danger">
        RANDOM
      </button>
    </div>
  );
};

// class Counter extends Component {
//   render() {
//     const { counter, dec, inc, rnd } = this.props;
//     return (
//       <div className="jumbotron">
//         <h1>{counter}</h1>
//         <button onClick={dec} className="btn btn-primary">
//           DEC
//         </button>
//         <button onClick={inc} className="btn btn-primary">
//           INC
//         </button>
//         <button onClick={rnd} className="btn btn-danger">
//           RANDOM
//         </button>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
//   return {
//     inc,
//     dec,
//     rnd,
//   };
// };

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;
