// import React, {Component} from 'react';
// import './itemDetails.css';
// import gotService from '../../services/gotService';
// import Loading from '../loading';
// import ErrorMessage from '../errorMessage';


// const Field = ({item, field, label}) => {
//     return (
//         <li className="list-group-item d-flex justify-content-between">
//             <span className="term">{label}</span>
//             <span>{item[field]}</span>
//         </li>
//     )
// }
// export {Field};

// export default class ItemDetails extends Component {

//     gotService = new gotService();

//     state = {
//         item: null,
//         loading: true,
//         error: false
//     }


//     componentDidMount() {
//         this.updateItem();
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.itemId !== prevProps.itemId) {
//             this.updateItem();
//         }
//     }


//     updateItem() {
//         const {itemId} = this.props;
//         if(!itemId){
//             return;
//         }
//         this.setState({loading: true});
//         const {getDetails} = this.props;
//         getDetails(itemId)
//             .then((item) => {
//                 this.setState({item, loading: false});
//             })
//             .catch(() => {
//                 this.setState({item: null, error: true})
//             })
//     }

//     render() {

//         if (!this.state.item && this.state.error) {
//             return <ErrorMessage/>
//         } else if (!this.state.item) {
//             return <span className="select-error"></span>
//         }

//         const {item} = this.state;
//         const {name} = item;

//         if (this.state.loading) {
//             return (
//                 <div className="char-details rounded">
//                     <Loading/>
//                 </div>
//             )
//         }

//         return (
//             <div className="char-details rounded">
//                 <h4>{name}</h4>
//                 <ul className="list-group list-group-flush">
//                     {React.Children.map(this.props.children, (child) => {

//                          return React.cloneElement(child, {item})

//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }
