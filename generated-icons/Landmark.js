import {tags} from 'ziko';
const {svg} = tags;
const Landmark = (props) => 
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
    tags.path({"d":"M10 18v-7"}),
	tags.path({"d":"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"}),
	tags.path({"d":"M14 18v-7"}),
	tags.path({"d":"M18 18v-7"}),
	tags.path({"d":"M3 22h18"}),
	tags.path({"d":"M6 18v-7"})
    )
export default Landmark;
