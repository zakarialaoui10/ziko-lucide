import {tags} from 'ziko';
const {svg} = tags;
const TrendingUp = (props) => 
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
    tags.path({"d":"M16 7h6v6"}),
	tags.path({"d":"m22 7-8.5 8.5-5-5L2 17"})
    )
export default TrendingUp;
