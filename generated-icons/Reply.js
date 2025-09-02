import {tags} from 'ziko';
const {svg} = tags;
const Reply = (props) => 
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
    tags.path({"d":"M20 18v-2a4 4 0 0 0-4-4H4"}),
	tags.path({"d":"m9 17-5-5 5-5"})
    )
export default Reply;
