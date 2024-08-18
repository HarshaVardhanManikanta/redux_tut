import Home from '../components/Home'
import {connect} from 'react-redux'
import {addCartItem} from '../service/actions/action'

const mapStateToProps = state=>({
    cartData:state
})

const mapDispatchToProps = (dispatch) =>({
  addToCartHandler:data=>dispatch(addCartItem(data))
})

export default connect(mapDispatchToProps,mapStateToProps)(Home)
