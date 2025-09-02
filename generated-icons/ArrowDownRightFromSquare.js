import {tags} from 'ziko';
const {svg} = tags;
const ArrowDownRightFromSquare = (props) => 
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
    tags.path({"d":"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}),
	tags.path({"d":"m21 21-9-9"}),
	tags.path({"d":"M21 15v6h-6"})
    )
export default ArrowDownRightFromSquare;
