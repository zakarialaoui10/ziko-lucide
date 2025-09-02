import {tags} from 'ziko';
const {svg} = tags;
const Move = (props) => 
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
    tags.path({"d":"M12 2v20"}),
	tags.path({"d":"m15 19-3 3-3-3"}),
	tags.path({"d":"m19 9 3 3-3 3"}),
	tags.path({"d":"M2 12h20"}),
	tags.path({"d":"m5 9-3 3 3 3"}),
	tags.path({"d":"m9 5 3-3 3 3"})
    )
export default Move;
