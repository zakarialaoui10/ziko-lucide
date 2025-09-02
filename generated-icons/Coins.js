import {tags} from 'ziko';
const {svg} = tags;
const Coins = (props) => 
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
    tags.circle({"cx":"8","cy":"8","r":"6"}),
	tags.path({"d":"M18.09 10.37A6 6 0 1 1 10.34 18"}),
	tags.path({"d":"M7 6h1v4"}),
	tags.path({"d":"m16.71 13.88.7.71-2.82 2.82"})
    )
export default Coins;
