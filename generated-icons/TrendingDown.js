import {tags} from 'ziko';
const {svg} = tags;
const TrendingDown = (props) => 
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
    tags.path({"d":"M16 17h6v-6"}),
	tags.path({"d":"m22 17-8.5-8.5-5 5L2 7"})
    )
export default TrendingDown;
