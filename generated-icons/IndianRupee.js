import {tags} from 'ziko';
const {svg} = tags;
const IndianRupee = (props) => 
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
    tags.path({"d":"M6 3h12"}),
	tags.path({"d":"M6 8h12"}),
	tags.path({"d":"m6 13 8.5 8"}),
	tags.path({"d":"M6 13h3"}),
	tags.path({"d":"M9 13c6.667 0 6.667-10 0-10"})
    )
export default IndianRupee;
