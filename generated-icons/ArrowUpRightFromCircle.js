import {tags} from 'ziko';
const {svg} = tags;
const ArrowUpRightFromCircle = (props) => 
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
    tags.path({"d":"M22 12A10 10 0 1 1 12 2"}),
	tags.path({"d":"M22 2 12 12"}),
	tags.path({"d":"M16 2h6v6"})
    )
export default ArrowUpRightFromCircle;
