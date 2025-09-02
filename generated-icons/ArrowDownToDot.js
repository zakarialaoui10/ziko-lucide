import {tags} from 'ziko';
const {svg} = tags;
const ArrowDownToDot = (props) => 
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
    tags.path({"d":"M12 2v14"}),
	tags.path({"d":"m19 9-7 7-7-7"}),
	tags.circle({"cx":"12","cy":"21","r":"1"})
    )
export default ArrowDownToDot;
