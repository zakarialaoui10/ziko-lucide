import {tags} from 'ziko';
const {svg} = tags;
const ShoppingBasket = (props) => 
    svg(
        {
        ...{
         "viewBox": "0 0 24 24",
         "fill": "none",
         "width": 24,
         "height": 24,
         "stroke": "green",
         "stroke-width": 2,
         "stroke-linecap": "round",
         "stroke-linejoin": "round"
        },
        ...props
        },
    tags.path({"d":"m15 11-1 9"}),
	tags.path({"d":"m19 11-4-7"}),
	tags.path({"d":"M2 11h20"}),
	tags.path({"d":"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}),
	tags.path({"d":"M4.5 15.5h15"}),
	tags.path({"d":"m5 11 4-7"}),
	tags.path({"d":"m9 11 1 9"})
    )
export default ShoppingBasket;
