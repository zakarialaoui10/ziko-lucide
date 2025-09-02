import {tags} from 'ziko';
const {svg} = tags;
const Flower2 = (props) => 
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
    tags.path({"d":"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}),
	tags.circle({"cx":"12","cy":"8","r":"2"}),
	tags.path({"d":"M12 10v12"}),
	tags.path({"d":"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}),
	tags.path({"d":"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"})
    )
export default Flower2;
