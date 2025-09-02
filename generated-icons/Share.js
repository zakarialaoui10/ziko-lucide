import {tags} from 'ziko';
const {svg} = tags;
const Share = (props) => 
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
    tags.path({"d":"M12 2v13"}),
	tags.path({"d":"m16 6-4-4-4 4"}),
	tags.path({"d":"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"})
    )
export default Share;
