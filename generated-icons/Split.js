import {tags} from 'ziko';
const {svg} = tags;
const Split = (props) => 
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
    tags.path({"d":"M16 3h5v5"}),
	tags.path({"d":"M8 3H3v5"}),
	tags.path({"d":"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}),
	tags.path({"d":"m15 9 6-6"})
    )
export default Split;
